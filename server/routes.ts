import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingEnquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/booking-enquiry", async (req, res) => {
    try {
      const validatedData = insertBookingEnquirySchema.parse(req.body);
      const enquiry = await storage.createBookingEnquiry(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Booking enquiry submitted successfully",
        data: enquiry 
      });
    } catch (error) {
      console.error("Booking enquiry error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid booking enquiry data" 
      });
    }
  });

  app.get("/api/booking-enquiries", async (_req, res) => {
    try {
      const enquiries = await storage.getBookingEnquiries();
      res.json({ success: true, data: enquiries });
    } catch (error) {
      console.error("Get enquiries error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve enquiries" 
      });
    }
  });

  return httpServer;
}
