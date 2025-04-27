import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function setupEmailConfig() {
  console.log('Setting up email configuration...');
  
  // Get SMTP configuration from user
  const smtpHost = await askQuestion('Enter SMTP host (e.g., smtp.gmail.com): ');
  const smtpPort = await askQuestion('Enter SMTP port (e.g., 587): ');
  const smtpUser = await askQuestion('Enter SMTP username (your email): ');
  const smtpPass = await askQuestion('Enter SMTP password or app password: ');
  const smtpFrom = await askQuestion('Enter sender email address (e.g., contact@eclosing.fr): ');
  
  // Create .env file content
  const envContent = `# API Package Environment Variables
NODE_ENV=development

# Server Configuration
PORT=3000
HOST="0.0.0.0"

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/monaco_shield"
DATABASE_SSL=false

# Authentication
JWT_SECRET="your-jwt-secret-key"
JWT_REFRESH_SECRET="your-jwt-refresh-secret-key"
JWT_EXPIRY="1h"
JWT_REFRESH_EXPIRY="7d"

# Security
CORS_ORIGIN="http://localhost:3000"
RATE_LIMIT_WINDOW=900000 # 15 minutes in milliseconds
RATE_LIMIT_MAX_REQUESTS=100

# Third Party Services
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
OPEN_SANCTIONS_API_KEY="your-opensanctions-api-key"
LYRA_PAYMENT_API_KEY="your-lyra-payment-api-key"
E_CONTRAT_API_KEY="your-econtrat-api-key"

# Email Configuration
SMTP_HOST="${smtpHost}"
SMTP_PORT=${smtpPort}
SMTP_USER="${smtpUser}"
SMTP_PASS="${smtpPass}"
SMTP_FROM="${smtpFrom}"
FRONTEND_URL="http://localhost:3000"

# Logging
LOG_LEVEL="debug"
LOG_FORMAT="json"

# Feature Flags
ENABLE_MULTI_LANGUAGE=true
ENABLE_STRIPE_INTEGRATION=true
ENABLE_DOCUMENT_SIGNING=true
ENABLE_AML_CHECKS=true
ENABLE_BE_VERIFICATION=true
`;

  // Write to .env file
  const envPath = path.resolve(__dirname, '../../.env');
  fs.writeFileSync(envPath, envContent);
  
  console.log(`Email configuration saved to ${envPath}`);
  console.log('You can now run the test email script to send test emails.');
  
  rl.close();
}

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

// Run the setup
setupEmailConfig(); 