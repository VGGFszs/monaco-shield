import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../models/User';
import crypto from 'crypto';

// JWT configuration from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'monaco-shield-secret-key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'monaco-shield-refresh-key';
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || '15m';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

export interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export const generateTokenPair = (user: IUser): TokenPair => {
  const payload: TokenPayload = {
    userId: user._id.toString(),
    email: user.email,
    role: user.role
  };
  
  const accessTokenOptions: SignOptions = { expiresIn: JWT_ACCESS_EXPIRES_IN };
  const refreshTokenOptions: SignOptions = { expiresIn: JWT_REFRESH_EXPIRES_IN };
  
  const accessToken = jwt.sign(payload, JWT_SECRET, accessTokenOptions);
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, refreshTokenOptions);
  
  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_REFRESH_SECRET) as TokenPayload;
};

export const extractTokenFromHeader = (authHeader?: string): string | null => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  return authHeader.split(' ')[1];
};

export const generatePasswordResetToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const hashPasswordResetToken = (token: string): string => {
  return crypto.createHash('sha256').update(token).digest('hex');
}; 