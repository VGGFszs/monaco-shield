import express from 'express';
import { 
  register, 
  login, 
  getCurrentUser, 
  refreshToken, 
  forgotPassword, 
  resetPassword,
  logout
} from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// Protected routes
router.get('/me', authenticate, getCurrentUser);
router.post('/logout', authenticate, logout);

export default router; 