import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import { RequestHandler } from 'express';

// CSRF protection using cookies
export const csrfProtection: RequestHandler[] = [
  cookieParser(),
  csurf({ cookie: true })
]; 