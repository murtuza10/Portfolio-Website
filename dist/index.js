"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.pool = void 0;
var serverless_1 = require("@neondatabase/serverless");
var neon_serverless_1 = require("drizzle-orm/neon-serverless");
var ws_1 = require("ws");
var schema = require("@shared/schema");
var config_js_1 = require("../config.js");
// This is the correct way neon config - DO NOT change this
serverless_1.neonConfig.webSocketConstructor = ws_1.default;
// Get database URL from environment variables or config
var databaseUrl = process.env.DATABASE_URL || config_js_1.config.database.url;
// Handle missing DATABASE_URL more gracefully in development
if (!databaseUrl) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error("DATABASE_URL must be set in production. Please configure your environment.");
    }
    else {
        console.error("\x1b[31mWARNING: DATABASE_URL is not set.\x1b[0m\n" +
            "You need to create a .env file in the project root with your database connection string:\n" +
            "DATABASE_URL=postgresql://username:password@hostname:port/database_name\n\n" +
            "The application will continue to run, but database operations will fail.");
    }
}
// Export a null connection pool if no database URL is available
// This allows the application to start, but database operations will fail
// when the pool is actually used
exports.pool = databaseUrl
    ? new serverless_1.Pool({ connectionString: databaseUrl })
    : null;
exports.db = (0, neon_serverless_1.drizzle)({ client: exports.pool, schema: schema });
