// config.js
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '.env') });

// Validate required environment variables
if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is required');
  console.log('Using fallback database URL from environment if available');
}

/**
 * @typedef {Object} DatabaseConfig
 * @property {string} url - The database connection URL
 */

/**
 * @typedef {Object} AppConfig
 * @property {DatabaseConfig} database - Database configuration
 * @property {string} environment - Application environment (development, production, etc.)
 * @property {number} port - Application port
 */

/** @type {AppConfig} */
export const config = {
  database: {
    url: process.env.DATABASE_URL || '',
  },
  environment: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
};
