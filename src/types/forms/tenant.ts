import { z } from "zod";

const tenantSchema = z
  .object({
    name: z.string().min(10, { message: "Digite seu nome completo" }),
    email: z.string().email({ message: "Digite um email valido" }),
    password: z
      .string()
      .min(8, { message: "A senha deve conter no minimo 8 caracteres" }),
    confirmPass: z.string().min(1, { message: "Campo obrigatório" }),
    phone: z.string().min(13, { message: "Numeor de telephone invalido" }),
    tanantName: z.string().min(1, { message: "Campo obrigatorio." }),
    primaryColor: z
      .string()
      .min(1, { message: "Campo obrigatorio." })
      .min(7, { message: "Cor Invalida!" }),
    city: z.string().min(1, { message: "Campo obrigatorio." }),
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

type TenantSchemaType = z.infer<typeof tenantSchema>;

export { type TenantSchemaType, tenantSchema };
