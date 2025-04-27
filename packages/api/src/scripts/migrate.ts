import { MigrationManager } from '../migrations/MigrationManager';
import { AddUserPreferencesMigration } from '../migrations/001_AddUserPreferences';
import { logger } from '../utils/logger';

const migrations = [
  new AddUserPreferencesMigration(),
  // Add more migrations here
];

const runMigrations = async () => {
  try {
    const direction = process.argv[2] as 'up' | 'down' || 'up';
    
    if (direction !== 'up' && direction !== 'down') {
      logger.error('Invalid direction. Use "up" or "down"');
      process.exit(1);
    }
    
    const manager = new MigrationManager(migrations);
    await manager.migrate(direction);
    
    logger.info('Migrations completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Migration failed:', error);
    process.exit(1);
  }
};

runMigrations(); 