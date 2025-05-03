import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Portfolio table to store all portfolio data
export const portfolio = pgTable("portfolio", {
  id: serial("id").primaryKey(),
  profile: json("profile").notNull(),
  education: json("education").notNull(),
  interests: json("interests").notNull(),
  skills: json("skills").notNull(),
  tools: json("tools").notNull(),
  languages: json("languages").notNull(),
  projects: json("projects").notNull(),
  contact: json("contact").notNull(),
});

// Messages table to store contact form submissions
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

// Resume table to store resume file information
export const resume = pgTable("resume", {
  id: serial("id").primaryKey(),
  filename: text("filename").notNull(),
  path: text("path").notNull(),
  mimeType: text("mime_type").notNull(),
  createdAt: text("created_at").notNull(),
});

// Schema for portfolio data
export const portfolioInsertSchema = createInsertSchema(portfolio);
export type PortfolioInsert = z.infer<typeof portfolioInsertSchema>;

// Schema for contact messages
export const messageInsertSchema = createInsertSchema(messages);
export type MessageInsert = z.infer<typeof messageInsertSchema>;

// Schema for resume uploads
export const resumeInsertSchema = createInsertSchema(resume);
export type ResumeInsert = z.infer<typeof resumeInsertSchema>;

// Export types
export type Portfolio = typeof portfolio.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type Resume = typeof resume.$inferSelect;
