import type { Express } from "express";
import { storage } from "../storage";

export function registerHealthRoutes(app: Express) {
  // Health check endpoint for debugging production issues
  app.get("/api/health", async (req, res) => {
    try {
      console.log("Health check requested");
      console.log("Environment:", process.env.NODE_ENV);
      console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
      
      // Test database connection
      const viewData = await storage.getViewCount();
      
      res.json({
        status: "healthy",
        database: "connected",
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
        viewCounter: viewData || "no data",
        hasDatabase: !!process.env.DATABASE_URL
      });
    } catch (error) {
      console.error("Health check failed:", error);
      res.status(500).json({
        status: "unhealthy",
        database: "disconnected",
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error),
        hasDatabase: !!process.env.DATABASE_URL
      });
    }
  });
}