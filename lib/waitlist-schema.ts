import { z } from "zod";

const MAX_FULL_NAME = 200;
const MAX_EMAIL = 320;
const MAX_PHONE = 50;

/**
 * Schema for POST /api/waitlist body.
 * Includes optional honeypot field "website"; if present and non-empty, treat as bot.
 */
export const waitlistRequestBodySchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(MAX_FULL_NAME)
    .trim(),
  email: z.string().min(1, "Email is required").max(MAX_EMAIL).email().trim().toLowerCase(),
  phone: z.string().max(MAX_PHONE).trim().optional().or(z.literal("")),
  marketingOptIn: z.boolean(),
  /** Honeypot: server rejects if non-empty; do not include in DB. */
  fax: z.string().optional(),
});

export type WaitlistRequestBody = z.infer<typeof waitlistRequestBodySchema>;
