import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = '24h';

export const generateToken = (userId: Types.ObjectId): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (token: string): Types.ObjectId => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    return new Types.ObjectId(decoded.userId);
  } catch (error) {
    throw new Error('Invalid token');
  }
}; 