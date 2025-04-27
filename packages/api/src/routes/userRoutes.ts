import express from 'express';
import { z } from 'zod';
import { User } from '../models/User';
import { updateUserSchema, updateUserRoleSchema, updateUserPreferencesSchema } from '../schemas/userSchemas';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validationMiddleware';
import { 
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateUserPreferences
} from '../controllers/userController';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get all users (admin only)
router.get('/', authorize(['admin']), getAllUsers);

// Get user by ID (admin or self)
router.get('/:id', authorize(['admin']), getUserById);

// Get current user profile
router.get('/me', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user (admin or self)
router.put('/:id', 
  authorize(['admin']), 
  validateRequest(updateUserSchema),
  updateUser
);

// Update user profile
router.patch('/me', async (req, res) => {
  try {
    const validatedData = updateUserSchema.parse(req.body);
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: validatedData },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user role (admin only)
router.patch('/:userId/role', authorize(['admin']), async (req, res) => {
  try {
    if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const validatedData = updateUserRoleSchema.parse(req.body);
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: { role: validatedData.role } },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user preferences
router.patch('/me/preferences', async (req, res) => {
  try {
    const validatedData = updateUserPreferencesSchema.parse(req.body);
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { preferences: validatedData } },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user (admin only)
router.delete('/:id', authorize(['admin']), deleteUser);

export default router; 