import { CorsOptions } from 'cors';

const allowedOrigins = ['http://localhost:5423'];

const corsConfig: CorsOptions = {
  origin: allowedOrigins,
};

export { corsConfig };
