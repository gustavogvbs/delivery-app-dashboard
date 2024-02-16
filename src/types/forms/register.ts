import z from "zod";

const registerSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPass: z.string().min(8),
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

export { type RegisterSchemaType, registerSchema };
