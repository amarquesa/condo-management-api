import { z } from "zod";

export const residentSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  unit_id: z.number()
});