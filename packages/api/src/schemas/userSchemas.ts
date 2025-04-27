import { z } from 'zod';

export const updateUserSchema = z.object({
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/).optional(),
  companyName: z.string().min(2).max(100).optional(),
  address: z.object({
    street: z.string().min(1).max(100),
    city: z.string().min(1).max(100),
    state: z.string().min(1).max(100),
    country: z.string().min(1).max(100),
    postalCode: z.string().min(1).max(20),
  }).optional(),
});

export const updateUserRoleSchema = z.object({
  role: z.enum(['user', 'admin', 'superadmin']),
});

export const updateUserPreferencesSchema = z.object({
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    sms: z.boolean(),
  }),
  language: z.enum(['en', 'fr', 'it']),
  timezone: z.string(),
  theme: z.enum(['light', 'dark', 'system']),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UpdateUserRoleInput = z.infer<typeof updateUserRoleSchema>;
export type UpdateUserPreferencesInput = z.infer<typeof updateUserPreferencesSchema>; 