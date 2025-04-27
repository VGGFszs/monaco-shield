export const APP_NAME = 'MonacoShield';
export const DEFAULT_LANGUAGE = 'fr';
export const SUPPORTED_LANGUAGES = ['fr', 'en', 'it'] as const;

export const SUBSCRIPTION_TIERS = {
  FREE: {
    name: 'free',
    maxUsers: 1,
    maxDossiers: 5,
    maxSignatures: 10,
    features: ['Basic AML checks', 'Basic e-signature', 'Basic BE verification']
  },
  BASIC: {
    name: 'basic',
    maxUsers: 3,
    maxDossiers: 20,
    maxSignatures: 50,
    features: ['Advanced AML checks', 'Advanced e-signature', 'Advanced BE verification', 'Email support']
  },
  PROFESSIONAL: {
    name: 'professional',
    maxUsers: 10,
    maxDossiers: 100,
    maxSignatures: 200,
    features: ['All Basic features', 'Priority support', 'API access', 'Custom branding']
  },
  ENTERPRISE: {
    name: 'enterprise',
    maxUsers: -1, // unlimited
    maxDossiers: -1, // unlimited
    maxSignatures: -1, // unlimited
    features: ['All Professional features', 'Dedicated support', 'Custom integration', 'SLA guarantee']
  }
} as const;

export const API_ENDPOINTS = {
  OPEN_SANCTIONS: 'https://api.opensanctions.org/search/default',
  LYRA_PAYMENT: 'https://api.lyra.com',
  E_CONTRAT: 'https://api.econtrat.com',
  GANDI_SMTP: 'smtp.gandi.net'
} as const;

export const SECURITY = {
  JWT_EXPIRY: '1h',
  REFRESH_TOKEN_EXPIRY: '7d',
  PASSWORD_MIN_LENGTH: 8,
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: 100
} as const;

export const FILE_LIMITS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_FILE_TYPES: ['application/pdf', 'image/jpeg', 'image/png'],
  MAX_FILES_PER_REQUEST: 5
} as const;

export const EMAIL_TEMPLATES = {
  INVITATION: {
    subject: "[Company Name] - You're invited to join MonacoShield",
    from: 'contact@eclosing.fr'
  },
  WELCOME: {
    subject: 'Welcome to MonacoShield!',
    from: 'contact@eclosing.fr'
  }
} as const;

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Authentication
export const AUTH_TOKEN_KEY = 'monaco_shield_token';
export const AUTH_USER_KEY = 'monaco_shield_user';

// Subscription plans
export const SUBSCRIPTION_PLANS = {
  FREE: 'free',
  BASIC: 'basic',
  PREMIUM: 'premium',
} as const;

// Feature flags
export const FEATURES = {
  MULTI_LANGUAGE: true,
  STRIPE_INTEGRATION: true,
  DOCUMENT_SIGNING: true,
} as const; 