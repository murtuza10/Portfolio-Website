import { db } from "@db";
import { portfolio, messages, resume, viewCounter } from "@shared/schema";
import { eq } from "drizzle-orm";
import fs from "fs/promises";
import path from "path";

export const storage = {
  // Get portfolio data
  getPortfolio: async () => {
    const portfolioData = await db.query.portfolio.findFirst();
    return portfolioData;
  },
  
  // Save a contact message
  saveMessage: async (messageData: { 
    name: string; 
    email: string; 
    subject: string; 
    message: string;
    createdAt: string;
  }) => {
    const result = await db.insert(messages).values(messageData).returning();
    return result[0];
  },
  
  // Get all messages
  getMessages: async () => {
    const allMessages = await db.query.messages.findMany({
      orderBy: (messages, { desc }) => [desc(messages.createdAt)]
    });
    return allMessages;
  },
  
  // Get a single message by ID
  getMessage: async (id: number) => {
    const message = await db.query.messages.findFirst({
      where: eq(messages.id, id)
    });
    return message;
  },
  
  // Get resume data
  getResume: async () => {
    const resumeData = await db.query.resume.findFirst();
    return resumeData;
  },
  
  // View counter functions using file storage (reliable for production)
  getViewCount: async () => {
    try {
      const dataPath = path.join(process.cwd(), 'data', 'views.json');
      const data = await fs.readFile(dataPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist, return default
      const defaultData = {
        id: 1,
        totalViews: 0,
        lastViewedAt: new Date().toISOString()
      };
      
      // Create the data directory and file
      try {
        await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
        await fs.writeFile(
          path.join(process.cwd(), 'data', 'views.json'), 
          JSON.stringify(defaultData, null, 2)
        );
      } catch (writeError) {
        console.warn("Could not create views file:", writeError);
      }
      
      return defaultData;
    }
  },
  
  incrementViewCount: async () => {
    const currentData = await storage.getViewCount();
    const updatedData = {
      id: 1,
      totalViews: currentData.totalViews + 1,
      lastViewedAt: new Date().toISOString()
    };
    
    try {
      await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
      await fs.writeFile(
        path.join(process.cwd(), 'data', 'views.json'), 
        JSON.stringify(updatedData, null, 2)
      );
      return updatedData;
    } catch (error) {
      console.error("Failed to write view count:", error);
      return currentData; // Return unchanged data if write fails
    }
  },
};
