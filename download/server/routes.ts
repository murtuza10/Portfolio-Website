import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from client/public
  app.use(express.static(path.join(process.cwd(), 'client/public')));
  // API route to get portfolio data
  app.get("/api/portfolio", async (req, res) => {
    try {
      const portfolioData = await storage.getPortfolio();
      res.json(portfolioData);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      res.status(500).json({ message: "Error fetching portfolio data" });
    }
  });

  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      const newMessage = {
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
      };
      
      await storage.saveMessage(newMessage);
      
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ message: "Error sending message" });
    }
  });

  // API route to download resume
  app.get("/api/download-resume", async (req, res) => {
    try {
      const resumeData = await storage.getResume();
      
      if (!resumeData) {
        return res.status(404).json({ message: "Resume not found" });
      }
      
      // Use the actual CV file path from the database
      const filePath = path.resolve(process.cwd(), resumeData.path);
      
      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        console.error(`Resume file not found at ${filePath}`);
        return res.status(404).json({ message: "Resume file not found" });
      }
      
      res.download(filePath, resumeData.filename, (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          return res.status(500).json({ message: "Error downloading resume" });
        }
        
        // No need to delete the actual file after download
        console.log(`Resume file ${resumeData.filename} downloaded successfully`);
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ message: "Error downloading resume" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
