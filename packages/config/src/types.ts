export type UserRole = 'admin' | 'manager' | 'viewer';

export interface User {
  id: string;
  email: string;
  name?: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  registrationNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SubscriptionTier = 'free' | 'basic' | 'professional' | 'enterprise';

export interface Subscription {
  id: string;
  userId: string;
  plan: 'free' | 'basic' | 'premium';
  status: 'active' | 'inactive' | 'cancelled';
  tier: SubscriptionTier;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Dossier {
  id: string;
  companyId: string;
  name: string;
  status: 'draft' | 'in_progress' | 'completed' | 'archived';
  type: 'aml' | 'signature' | 'be' | 'training';
  createdAt: Date;
  updatedAt: Date;
}

export interface SignatureRequest {
  id: string;
  dossierId: string;
  documentUrl: string;
  status: 'pending' | 'signed' | 'expired';
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface BEVerification {
  id: string;
  dossierId: string;
  companyName: string;
  registrationNumber: string;
  status: 'pending' | 'verified' | 'failed';
  verificationDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AMLCheck {
  id: string;
  dossierId: string;
  personName: string;
  status: 'clean' | 'flagged' | 'error';
  checkDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  ownerId: string;
} 