import { IUser, User } from '../models/User';
import { 
  sendSecurityAlert, 
  sendModuleNotification, 
  sendSubscriptionUpdate,
  sendEmailVerification
} from './emailService';
import crypto from 'crypto';

// Generate a random token for email verification
export const generateEmailVerificationToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

// Hash the email verification token
export const hashEmailVerificationToken = (token: string): string => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

// Send email verification
export const sendVerificationEmail = async (user: IUser): Promise<void> => {
  // Generate verification token
  const verificationToken = generateEmailVerificationToken();
  const hashedToken = hashEmailVerificationToken(verificationToken);
  
  // Save token to user
  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  await user.save();
  
  // Send verification email
  await sendEmailVerification(user, verificationToken);
};

// Send security alert
export const sendSecurityAlertNotification = async (
  user: IUser,
  alertType: string,
  details: string
): Promise<void> => {
  // Check if user has opted out of security alerts
  if (user.notificationPreferences?.securityAlerts === false) {
    return;
  }
  
  await sendSecurityAlert(user.email, alertType, details);
};

// Send module notification
export const sendModuleUpdateNotification = async (
  user: IUser,
  moduleName: string,
  action: string,
  details: string
): Promise<void> => {
  // Check if user has opted out of module updates
  if (user.notificationPreferences?.moduleUpdates === false) {
    return;
  }
  
  await sendModuleNotification(user.email, moduleName, action, details);
};

// Send subscription update notification
export const sendSubscriptionUpdateNotification = async (
  user: IUser,
  planName: string,
  action: string,
  details: string
): Promise<void> => {
  // Check if user has opted out of subscription updates
  if (user.notificationPreferences?.subscriptionUpdates === false) {
    return;
  }
  
  await sendSubscriptionUpdate(user.email, planName, action, details);
};

// Verify email token
export const verifyEmailToken = async (
  token: string
): Promise<IUser | null> => {
  const hashedToken = hashEmailVerificationToken(token);
  
  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    return null;
  }
  
  // Mark email as verified
  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save();
  
  return user;
};

export const sendPasswordResetEmail = async (user: IUser, resetToken: string): Promise<void> => {
  if (!user.email) {
    throw new Error('User email not found');
  }

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
  
  await sendEmail({
    to: user.email,
    subject: 'Password Reset Request',
    text: `You requested a password reset. Please click the following link to reset your password: ${resetUrl}`,
    html: `
      <h1>Password Reset Request</h1>
      <p>You requested a password reset. Please click the following link to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
    `
  });
}; 