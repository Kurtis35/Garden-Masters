import { z } from "zod";

// This is a 100% frontend-only website.
// No database tables are required.

// We export a basic schema for structure if any forms are added later,
// though currently all actions use native mailto/tel/wa links.
export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});
export type ContactForm = z.infer<typeof contactFormSchema>;
