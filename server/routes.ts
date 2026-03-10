import type { Express } from "express";
import { type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // No backend API routes are registered since this is a 100% frontend-only site.
  // The Express app will only serve static files and Vite's frontend assets.
  
  return httpServer;
}
