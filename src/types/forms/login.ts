import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Digite um email valido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve conter no minimo 8 caracteres" }),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export { type LoginSchemaType, loginSchema };
