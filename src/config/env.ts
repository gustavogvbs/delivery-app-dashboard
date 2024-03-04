import { z } from "zod";

const schemaEnv = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

export const env = schemaEnv.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});
