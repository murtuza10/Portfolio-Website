import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
import { config } from '../config.js';

// This is the correct way neon config - DO NOT change this
neonConfig.webSocketConstructor = ws;

// Get database URL from environment variables or config
const databaseUrl = process.env.DATABASE_URL || config.database.url;

// Handle missing DATABASE_URL more gracefully in development
if (!databaseUrl) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      "DATABASE_URL must be set in production. Please configure your environment."
    );
  } else {
    console.error(
      "\x1b[31mWARNING: DATABASE_URL is not set.\x1b[0m\n" +
      "You need to create a .env file in the project root with your database connection string:\n" +
      "DATABASE_URL=postgresql://username:password@hostname:port/database_name\n\n" +
      "The application will continue to run, but database operations will fail."
    );
  }
}

// Export a null connection pool if no database URL is available
// This allows the application to start, but database operations will fail
// when the pool is actually used
export const pool = databaseUrl
  ? new Pool({ connectionString: databaseUrl })
  : null as unknown as Pool;

export const db = drizzle({ client: pool, schema });