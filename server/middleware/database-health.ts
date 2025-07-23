import { db } from "@db";
import { viewCounter } from "@shared/schema";

export async function checkDatabaseHealth() {
  try {
    // Test basic database connection
    await db.select().from(viewCounter).limit(1);
    return { healthy: true, message: "Database connection successful" };
  } catch (error) {
    console.error("Database health check failed:", error);
    return { 
      healthy: false, 
      message: error instanceof Error ? error.message : "Unknown database error",
      error: error
    };
  }
}

export async function initializeDatabaseTables() {
  try {
    // Check if view_counter table exists and has data
    const existingCount = await db.select().from(viewCounter).limit(1);
    
    if (existingCount.length === 0) {
      // Initialize with first view
      const result = await db.insert(viewCounter).values({
        totalViews: 1,
        lastViewedAt: new Date().toISOString()
      }).returning();
      
      console.log("Initialized view_counter table:", result[0]);
      return result[0];
    }
    
    return existingCount[0];
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
    throw error;
  }
}