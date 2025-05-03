// Type definitions for config.js

export interface DatabaseConfig {
  url: string;
}

export interface AppConfig {
  database: DatabaseConfig;
  environment: string;
  port: number;
}

export const config: AppConfig;
