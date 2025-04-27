# MonacoShield API

This is the backend API for the MonacoShield platform, providing services for user authentication, subscription management, and compliance modules.

## Email Service

The API includes a comprehensive email service for sending various types of notifications to users. The email service is implemented using nodemailer and supports the following types of emails:

1. **Welcome Email**: Sent to new users upon registration
2. **Password Reset Email**: Sent when a user requests a password reset
3. **Email Verification**: Sent to verify a user's email address
4. **Security Alert**: Sent for security-related notifications
5. **Module Notification**: Sent for updates related to compliance modules
6. **Subscription Update**: Sent for changes to a user's subscription

## Testing the Email Service

To test the email service, follow these steps:

### 1. Set up Email Configuration

Run the setup script to configure the email service:

```bash
npm run setup-email
```

This script will prompt you for the following information:
- SMTP host (e.g., smtp.gmail.com)
- SMTP port (e.g., 587)
- SMTP username (your email)
- SMTP password or app password
- Sender email address

The script will create a `.env` file with the provided configuration.

### 2. Send Test Emails

Run the test script to send sample emails:

```bash
npm run test-email
```

This script will send the following test emails to the address specified in the script:
- Welcome email
- Password reset email
- Email verification
- Security alert
- Module notification
- Subscription update

## Email Templates

The email templates are defined in `src/services/emailTemplates.ts`. You can customize these templates to match your branding and requirements.

## Troubleshooting

If you encounter issues with sending emails, check the following:

1. **SMTP Configuration**: Ensure that the SMTP host, port, username, and password are correct.
2. **Firewall/Network**: Make sure that your network allows outgoing connections to the SMTP server.
3. **Email Provider Restrictions**: Some email providers have restrictions on sending emails from applications. You may need to use an app password or enable "Less secure app access".

## Gmail Configuration

If you're using Gmail as your SMTP provider, follow these steps:

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Scroll down and click on "App passwords"
   - Select "Mail" and your device
   - Use the generated password as your SMTP password

## Production Configuration

For production environments, consider using a dedicated email service provider such as SendGrid, Mailgun, or Amazon SES for better deliverability and monitoring. 