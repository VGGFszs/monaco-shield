import mongoose from 'mongoose';
import { CustomError } from './CustomError';

export const connectDB = async (uri: string): Promise<void> => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new CustomError(500, 'Database connection failed');
  }
}; 