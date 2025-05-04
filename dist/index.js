var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// config.js
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var possibleEnvPaths = [
  join(process.cwd(), ".env"),
  // Current working directory
  join(__dirname, ".env"),
  // Root directory
  join(__dirname, "..", ".env")
  // One level up
];
var envLoaded = false;
for (const envPath of possibleEnvPaths) {
  if (fs.existsSync(envPath)) {
    console.log(`Loading environment from: ${envPath}`);
    dotenv.config({ path: envPath });
    envLoaded = true;
    break;
  }
}
if (!envLoaded) {
  console.warn("Warning: No .env file found. Using environment variables if available.");
}
if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL environment variable is required");
  console.error("Please create a .env file with DATABASE_URL or set the environment variable.");
}
var config = {
  database: {
    url: process.env.DATABASE_URL || ""
  },
  environment: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5e3
};

// server/index.ts
import express3 from "express";

// server/routes.ts
import { createServer } from "http";

// db/index.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  messageInsertSchema: () => messageInsertSchema,
  messages: () => messages,
  portfolio: () => portfolio,
  portfolioInsertSchema: () => portfolioInsertSchema,
  resume: () => resume,
  resumeInsertSchema: () => resumeInsertSchema
});
import { pgTable, text, serial, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var portfolio = pgTable("portfolio", {
  id: serial("id").primaryKey(),
  profile: json("profile").notNull(),
  education: json("education").notNull(),
  interests: json("interests").notNull(),
  skills: json("skills").notNull(),
  tools: json("tools").notNull(),
  languages: json("languages").notNull(),
  experience: json("experience").notNull().$defaultFn(() => []),
  projects: json("projects").notNull(),
  contact: json("contact").notNull()
});
var messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull()
});
var resume = pgTable("resume", {
  id: serial("id").primaryKey(),
  filename: text("filename").notNull(),
  path: text("path").notNull(),
  mimeType: text("mime_type").notNull(),
  createdAt: text("created_at").notNull()
});
var portfolioInsertSchema = createInsertSchema(portfolio);
var messageInsertSchema = createInsertSchema(messages);
var resumeInsertSchema = createInsertSchema(resume);

// db/index.ts
neonConfig.webSocketConstructor = ws;
var databaseUrl = process.env.DATABASE_URL || config.database.url;
if (!databaseUrl) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "DATABASE_URL must be set in production. Please configure your environment."
    );
  } else {
    console.error(
      "\x1B[31mWARNING: DATABASE_URL is not set.\x1B[0m\nYou need to create a .env file in the project root with your database connection string:\nDATABASE_URL=postgresql://username:password@hostname:port/database_name\n\nThe application will continue to run, but database operations will fail."
    );
  }
}
var pool = databaseUrl ? new Pool({ connectionString: databaseUrl }) : null;
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
var storage = {
  // Get portfolio data
  getPortfolio: async () => {
    const portfolioData = await db.query.portfolio.findFirst();
    return portfolioData;
  },
  // Save a contact message
  saveMessage: async (messageData) => {
    const result = await db.insert(messages).values(messageData).returning();
    return result[0];
  },
  // Get all messages
  getMessages: async () => {
    const allMessages = await db.query.messages.findMany({
      orderBy: (messages2, { desc }) => [desc(messages2.createdAt)]
    });
    return allMessages;
  },
  // Get a single message by ID
  getMessage: async (id) => {
    const message = await db.query.messages.findFirst({
      where: eq(messages.id, id)
    });
    return message;
  },
  // Get resume data
  getResume: async () => {
    const resumeData = await db.query.resume.findFirst();
    return resumeData;
  }
};

// server/routes.ts
import path from "path";
import fs2 from "fs";
import express from "express";
async function registerRoutes(app2) {
  app2.use(express.static(path.join(process.cwd(), "client/public")));
  app2.get("/api/portfolio", async (req, res) => {
    try {
      const portfolioData = await storage.getPortfolio();
      res.json(portfolioData);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      res.status(500).json({ message: "Error fetching portfolio data" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
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
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      await storage.saveMessage(newMessage);
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ message: "Error sending message" });
    }
  });
  app2.get("/api/download-resume", async (req, res) => {
    try {
      const resumeData = await storage.getResume();
      if (!resumeData) {
        return res.status(404).json({ message: "Resume not found" });
      }
      const filePath = path.resolve(process.cwd(), resumeData.path);
      if (!fs2.existsSync(filePath)) {
        console.error(`Resume file not found at ${filePath}`);
        return res.status(404).json({ message: "Resume file not found" });
      }
      res.download(filePath, resumeData.filename, (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          return res.status(500).json({ message: "Error downloading resume" });
        }
        console.log(`Resume file ${resumeData.filename} downloaded successfully`);
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ message: "Error downloading resume" });
    }
  });
  app2.get("/images/profile.jpeg", (req, res) => {
    const imagePath = path.join(process.cwd(), "client", "public", "images", "profile.jpeg");
    res.sendFile(imagePath);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express2 from "express";
import fs3 from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@db": path2.resolve(import.meta.dirname, "db"),
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "profile.jpeg") {
            return "images/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs3.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs3.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express3();
app.use(express3.json());
app.use(express3.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen(port, "localhost", () => {
    log(`serving on port ${port}`);
  });
})();
