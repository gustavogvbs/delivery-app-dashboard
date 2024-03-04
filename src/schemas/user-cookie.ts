import { z } from "zod";

export const SchemaUserCookie = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});
