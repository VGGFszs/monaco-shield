import dotenv from 'dotenv';
import path from 'path';
import nodemailer from 'nodemailer';
import { emailTemplates } from '../services/emailTemplates';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Email configuration
const TEST_EMAIL = 'vincent.fabie@eclosing.fr';
const SMTP_CONFIG = {
  host: 'mail.gandi.net',
  port: 587,
  secure: false,
  auth: {
    user: 'contact@eclosing.fr',
    pass: 'cQJv2013'
  }
};

// Create transporter
const transporter = nodemailer.createTransport(SMTP_CONFIG);

// Email sending function
async function sendEmail(options: { to: string; subject: string; html: string }) {
  try {
    await transporter.sendMail({
      from: 'contact@eclosing.fr',
      ...options,
    });
    console.log(`Email sent successfully to ${options.to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

async function testEmails() {
  try {
    console.log('Starting email tests...');
    
    // Test welcome email
    console.log('Sending welcome email...');
    await sendEmail({
      to: TEST_EMAIL,
      subject: 'Welcome to MonacoShield',
      html: emailTemplates.welcome('Vincent'),
    });
    console.log('Welcome email sent successfully!');
    
    // Test password reset email
    console.log('Sending password reset email...');
    await sendEmail({
      to: TEST_EMAIL,
      subject: 'Password Reset Request',
      html: emailTemplates.passwordReset('https://monacoshield.com/reset-password?token=test-token'),
    });
    console.log('Password reset email sent successfully!');
    
    // Test email verification
    console.log('Sending email verification...');
    await sendEmail({
      to: TEST_EMAIL,
      subject: 'Verify Your Email Address',
      html: emailTemplates.emailVerification('https://monacoshield.com/verify-email?token=test-token'),
    });
    console.log('Email verification sent successfully!');
    
    // Test security alert
    console.log('Sending security alert...');
    await sendEmail({
      to: TEST_EMAIL,
      subject: 'Security Alert: Suspicious Login',
      html: emailTemplates.securityAlert('Suspicious Login', 'We detected a login attempt from an unknown device. If this was you, you can ignore this alert.'),
    });
    console.log('Security alert sent successfully!');
    
    // Test module notification
    console.log('Sending module notification...');
    await sendEmail({
      to: TEST_EMAIL,
      subject: 'Module Notification: AML Check',
      html: emailTemplates.moduleNotification('AML Check', 'Completed', 'Your AML check has been completed successfully.'),
    });
    console.log('Module notification sent successfully!');
    
    // Test subscription update
    console.log('Sending subscription update...');
    await sendEmail({
      to: TEST_EMAIL,
      subject: 'Subscription Update',
      html: emailTemplates.subscriptionUpdate('Premium Plan', 'Upgraded', 'Your subscription has been upgraded to the Premium Plan.'),
    });
    console.log('Subscription update sent successfully!');
    
    console.log('All email tests completed successfully!');
  } catch (error) {
    console.error('Error sending test emails:', error);
  }
}

// Run the test
testEmails(); 