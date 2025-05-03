import { db } from "@db";
import { portfolio, messages, resume } from "@shared/schema";
import { eq } from "drizzle-orm";

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
};
