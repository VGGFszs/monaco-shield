import { connectDB, disconnectDB } from '../config/database';
import { User } from '../models/User';
import { logger } from '../utils/logger';

const initializeDatabase = async () => {
  try {
    // Connect to database
    await connectDB();
    logger.info('Starting database initialization...');
    
    // Create indexes
    await User.collection.createIndex({ email: 1 }, { unique: true });
    logger.info('Created indexes');
    
    // Check if admin user exists
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      // Create admin user
      const adminUser = new User({
        firstName: 'Admin',
        lastName: 'User',
        email: process.env.ADMIN_EMAIL || 'admin@monacoshield.com',
        password: process.env.ADMIN_PASSWORD || 'admin123',
        role: 'admin',
        isEmailVerified: true
      });
      
      await adminUser.save();
      logger.info('Created admin user');
    }
    
    logger.info('Database initialization completed successfully');
  } catch (error) {
    logger.error('Error initializing database:', error);
    process.exit(1);
  } finally {
    await disconnectDB();
  }
};

// Run initialization
initializeDatabase(); 