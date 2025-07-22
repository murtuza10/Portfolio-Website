import { db } from "@db";
import { portfolio, messages, resume, viewCounter } from "@shared/schema";
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
  
  // View counter functions
  getViewCount: async () => {
    const viewData = await db.query.viewCounter.findFirst();
    return viewData;
  },
  
  incrementViewCount: async () => {
    const existingView = await db.query.viewCounter.findFirst();
    
    if (existingView) {
      const result = await db
        .update(viewCounter)
        .set({ 
          totalViews: existingView.totalViews + 1,
          lastViewedAt: new Date().toISOString()
        })
        .where(eq(viewCounter.id, existingView.id))
        .returning();
      return result[0];
    } else {
      const result = await db.insert(viewCounter).values({
        totalViews: 1,
        lastViewedAt: new Date().toISOString()
      }).returning();
      return result[0];
    }
  },
};
