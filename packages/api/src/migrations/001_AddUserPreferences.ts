import { Migration } from './Migration';
import { User } from '../models/User';
import { logger } from '../utils/logger';

export class AddUserPreferencesMigration extends Migration {
  public version = 1;
  public description = 'Add user preferences to User model';
  
  async up(): Promise<void> {
    try {
      // Add notificationPreferences field to all users
      await User.updateMany(
        { notificationPreferences: { $exists: false } },
        {
          $set: {
            notificationPreferences: {
              securityAlerts: true,
              moduleUpdates: true,
              subscriptionUpdates: true
            }
          }
        }
      );
      
      logger.info('Added notification preferences to users');
    } catch (error) {
      logger.error('Error adding user preferences:', error);
      throw error;
    }
  }
  
  async down(): Promise<void> {
    try {
      // Remove notificationPreferences field from all users
      await User.updateMany(
        {},
        { $unset: { notificationPreferences: 1 } }
      );
      
      logger.info('Removed notification preferences from users');
    } catch (error) {
      logger.error('Error removing user preferences:', error);
      throw error;
    }
  }
} 