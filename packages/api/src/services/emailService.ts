import nodemailer from 'nodemailer';
import { IUser } from '../models/User';
import { emailTemplates } from './emailTemplates';

// Email configuration from environment variables
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'smtp';
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.example.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587', 10);
const EMAIL_USER = process.env.EMAIL_USER || 'your-email@example.com';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || 'your-email-password';
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@monacoshield.com';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      ...options,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

// Welcome email
export const sendWelcomeEmail = async (
  email: string,
  firstName: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: 'Welcome to MonacoShield',
    html: emailTemplates.welcome(firstName),
  });
};

// Password reset email
export const sendPasswordResetEmail = async (
  email: string,
  resetLink: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: 'Password Reset Request',
    html: emailTemplates.passwordReset(resetLink),
  });
};

// Email verification
export const sendVerificationEmail = async (
  email: string,
  verificationLink: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: 'Verify Your Email Address',
    html: emailTemplates.emailVerification(verificationLink),
  });
};

// Security alert
export const sendSecurityAlertEmail = async (
  email: string,
  alertType: string,
  details: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: `Security Alert: ${alertType}`,
    html: emailTemplates.securityAlert(alertType, details),
  });
};

// Module notification
export const sendModuleNotificationEmail = async (
  email: string,
  moduleName: string,
  action: string,
  details: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: `Module Notification: ${moduleName}`,
    html: emailTemplates.moduleNotification(moduleName, action, details),
  });
};

// Subscription update
export const sendSubscriptionUpdateEmail = async (
  email: string,
  planName: string,
  action: string,
  details: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: 'Subscription Update',
    html: emailTemplates.subscriptionUpdate(planName, action, details),
  });
}; 