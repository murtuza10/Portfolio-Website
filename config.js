// config.js
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try multiple possible locations for .env file
const possibleEnvPaths = [
  join(process.cwd(), '.env'),            // Current working directory
  join(__dirname, '.env'),                // Root directory
  join(__dirname, '..', '.env'),          // One level up
];

let envLoaded = false;

for (const envPath of possibleEnvPaths) {
  if (fs.existsSync(envPath)) {
    console.log(`Loading environment from: ${envPath}`);
    dotenv.config({ path: envPath });
    envLoaded = true;
    break;
  }
}

if (!envLoaded) {
  console.warn('Warning: No .env file found. Using environment variables if available.');
}

// Validate required environment variables
if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is required');
  console.error('Please create a .env file with DATABASE_URL or set the environment variable.');
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
