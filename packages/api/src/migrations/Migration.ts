import { connectDB, disconnectDB } from '../config/database';
import { logger } from '../utils/logger';

export abstract class Migration {
  public abstract version: number;
  public abstract description: string;
  
  abstract up(): Promise<void>;
  abstract down(): Promise<void>;
  
  async execute(direction: 'up' | 'down'): Promise<void> {
    try {
      await connectDB();
      logger.info(`Running migration ${direction}: ${this.description} (v${this.version})`);
      
      if (direction === 'up') {
        await this.up();
      } else {
        await this.down();
      }
      
      logger.info(`Migration ${direction} completed: ${this.description} (v${this.version})`);
    } catch (error) {
      logger.error(`Migration ${direction} failed: ${this.description} (v${this.version})`, error);
      throw error;
    } finally {
      await disconnectDB();
    }
  }
} 