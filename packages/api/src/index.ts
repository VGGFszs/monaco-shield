import express from 'express';
import { corsMiddleware } from '../middleware/corsConfig';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import { errorHandler } from './middleware/errorHandler';
import { apiLimiter, authLimiter, passwordResetLimiter } from './middleware/rateLimiter';
import { csrfProtection } from '../middleware/csrfProtection';
import authRoutes from './routes/authRoutes';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(csrfProtection);

// Apply rate limiting to all routes
app.use(apiLimiter);

// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
// TODO: Add other routes here

// Apply stricter rate limiting to auth routes
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/forgot-password', passwordResetLimiter);

// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 