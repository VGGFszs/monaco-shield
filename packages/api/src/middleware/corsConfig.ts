import cors, { CorsOptions } from 'cors';

// Define allowed origins (update as needed)
const allowedOrigins = [
  'https://monacoshield.com',
  'https://www.monacoshield.com',
  'http://localhost:3000',
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
};

export const corsMiddleware = cors(corsOptions); 