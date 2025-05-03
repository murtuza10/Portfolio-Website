import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
import { config } from '../config.js';

// This is the correct way neon config - DO NOT change this
neonConfig.webSocketConstructor = ws;

// Check for DATABASE_URL in environment variables or config
const databaseUrl = process.env.DATABASE_URL || config.database.url;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: databaseUrl });
export const db = drizzle({ client: pool, schema });