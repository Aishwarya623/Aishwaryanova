import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      
      // Send email notification (mock for now)
      /*const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.CONTACT_EMAIL,
        subject: "New Contact Form Submission",
        text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nCompany: ${contactData.company}\nMessage: ${contactData.message}`,
      });*/

      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid input" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
