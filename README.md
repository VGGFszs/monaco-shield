# MonacoShield Platform

A freemium web application for Monaco-based businesses to comply with Anti-Money Laundering (AML) and electronic signature regulations.

## 🚀 Features

- **Public Marketing Site**: SEO-optimized website showcasing MonacoShield's value proposition
- **Multi-step Onboarding**: Streamlined registration and subscription process
- **Secure Dashboard**: Comprehensive compliance management platform
- **Multilingual Support**: French (default), English, and Italian
- **Multiple Compliance Modules**: AML, E-Signature, BE Verification, and more

## 🏗️ Project Structure

The application is composed of three main apps:

1. **Public Marketing Site** (`apps/site-public`): The public-facing marketing website
2. **Onboarding App** (`apps/onboarding`): Handles user registration, subscription selection, and payment
3. **Dashboard App** (`apps/dashboard`): The authenticated user dashboard

## 🛠️ Tech Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma
- **Authentication**: JWT + Refresh tokens
- **Deployment**: Vercel (Frontend), Railway (Backend)

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🔧 Environment Variables

The project uses different environment files for different parts of the application:

- `config/env/root.env.example`: Common variables for the entire monorepo
- `config/env/onboarding.env.example`: Onboarding app specific variables
- `config/env/web.env.example`: Marketing site specific variables
- `config/env/dashboard.env.example`: Dashboard app specific variables
- `config/env/api.env.example`: Backend API specific variables

Required environment variables for each part:

### Root Variables
- `NODE_ENV`: Development environment
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: JWT signing secret
- `JWT_REFRESH_SECRET`: JWT refresh token secret

### Onboarding App
- `NEXT_PUBLIC_API_URL`: API base URL
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe public key
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret

### Web App
- `NEXT_PUBLIC_SITE_URL`: Public site URL
- `NEXT_PUBLIC_SITE_NAME`: Site name
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics ID

### Dashboard App
- `NEXT_PUBLIC_API_URL`: API base URL
- `NEXT_PUBLIC_ENABLE_AML_CHECKS`: Enable AML checks
- `NEXT_PUBLIC_ENABLE_E_SIGNATURE`: Enable e-signature
- `NEXT_PUBLIC_MAX_FILE_SIZE`: Maximum file upload size

### API Package
- `PORT`: API server port
- `DATABASE_URL`: Database connection string
- `JWT_SECRET`: JWT signing secret
- `SMTP_HOST`: SMTP server host
- `SMTP_USER`: SMTP username
- `SMTP_PASSWORD`: SMTP password

## 📚 Documentation

- [API Documentation](./docs/api.md)
- [Architecture Overview](./docs/architecture.md)
- [Deployment Guide](./docs/deployment.md)

## 🔒 Security

- CSRF protection
- Rate limiting
- Bot detection
- Honeypot fields
- Secure form handling

## 🌍 Internationalization

The platform supports three languages:
- French (default)
- English
- Italian

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- Development Team
- Product Management
- Design Team
- Compliance Experts

## Frontend Integration

### Authentication Flow

The platform uses a token-based authentication system:

1. Users register through the onboarding app
2. Upon successful registration, they receive an access token and refresh token
3. The access token is used for API requests
4. When the access token expires, the refresh token is used to obtain a new access token
5. If the refresh token is invalid or expired, the user is redirected to the login page

### Protected Routes

The dashboard app implements protected routes to ensure that only authenticated users can access certain pages:

1. The `ProtectedRoute` component checks for the presence of an access token
2. If no token is found, the user is redirected to the login page
3. If a token is found, the component verifies it by making a request to the API
4. If the token is invalid, the user is redirected to the login page
5. If the token is valid, the protected content is rendered

### State Management

The platform uses React Context for state management:

1. The `AuthContext` provides authentication state and methods to the entire application
2. Components can access the authentication state using the `useAuth` hook
3. The context includes methods for login, registration, and logout
4. Loading states and error handling are managed through the context

### API Integration

The platform uses Axios for API requests:

1. API requests are configured with interceptors to add authentication tokens
2. Response interceptors handle token refresh when the access token expires
3. Error handling is implemented for API requests
4. Loading states are managed for API requests

## Development

### Running the Onboarding App

```bash
cd apps/onboarding
npm run dev
```

### Running the Dashboard App

```bash
cd apps/dashboard
npm run dev
```

## Deployment

The platform can be deployed using the following command:

```bash
npm run build
``` 