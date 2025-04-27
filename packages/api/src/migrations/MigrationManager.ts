import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../config/database';
import { logger } from '../utils/logger';
import { Migration } from './Migration';

// Schema for tracking migrations
const migrationSchema = new mongoose.Schema({
  version: { type: Number, required: true, unique: true },
  description: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }
});

const MigrationModel = mongoose.model('Migration', migrationSchema);

export class MigrationManager {
  private migrations: Migration[] = [];
  
  constructor(migrations: Migration[]) {
    this.migrations = migrations.sort((a, b) => a.version - b.version);
  }
  
  async migrate(direction: 'up' | 'down' = 'up'): Promise<void> {
    try {
      await connectDB();
      
      if (direction === 'up') {
        await this.migrateUp();
      } else {
        await this.migrateDown();
      }
    } catch (error) {
      logger.error('Migration failed:', error);
      throw error;
    } finally {
      await disconnectDB();
    }
  }
  
  private async migrateUp(): Promise<void> {
    const appliedMigrations = await MigrationModel.find().sort({ version: 1 });
    const appliedVersions = new Set(appliedMigrations.map(m => m.version));
    
    for (const migration of this.migrations) {
      if (!appliedVersions.has(migration.version)) {
        await migration.execute('up');
        await MigrationModel.create({
          version: migration.version,
          description: migration.description
        });
        logger.info(`Applied migration v${migration.version}`);
      }
    }
  }
  
  private async migrateDown(): Promise<void> {
    const appliedMigrations = await MigrationModel.find().sort({ version: -1 });
    
    for (const migration of appliedMigrations) {
      const migrationClass = this.migrations.find(m => m.version === migration.version);
      if (migrationClass) {
        await migrationClass.execute('down');
        await MigrationModel.deleteOne({ version: migration.version });
        logger.info(`Reverted migration v${migration.version}`);
      }
    }
  }
} 