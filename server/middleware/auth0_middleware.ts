import dotenv from 'dotenv';
import { auth } from 'express-oauth2-jwt-bearer';

// configurations
dotenv.config();

// middleware function
export const validateAccessToken = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`
});