// Debug script to test database connection
import { config } from './config.js';
import { db } from './db/index.js';
import { viewCounter } from './shared/schema.js';

async function testDatabaseConnection() {
  try {
    console.log('Testing database connection...');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('Environment:', process.env.NODE_ENV);
    
    // Test basic connection
    const result = await db.select().from(viewCounter).limit(1);
    console.log('Database connection successful!');
    console.log('Current view data:', result);
    
    // Test view counter operations
    const viewData = await db.query.viewCounter.findFirst();
    console.log('View counter query result:', viewData);
    
  } catch (error) {
    console.error('Database connection failed:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
  }
}

testDatabaseConnection();