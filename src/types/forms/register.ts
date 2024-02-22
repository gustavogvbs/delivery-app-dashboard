import { z } from "zod";

const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Campo obrigatório" }),
    phone: z.string().min(1, { message: "Campo obrigatório" }),
    email: z.string().email({ message: "Digite um email valido" }),
    password: z
      .string()
      .min(8, { message: "A senha deve conter no minimo 8 caracteres" }),
    confirmPass: z.string().min(1, { message: "Campo obrigatório" }),
  })
  .refine(
    ({ password, confirmPass }) => {
      console.log("erro");
      return password === confirmPass;
    },
    {
      message: "As senhas devem ser iguais",
      path: ["confirmPass"],
    },
  );

type RegisterSchemaType = z.infer<typeof registerSchema>;

export { type RegisterSchemaType, registerSchema };
