import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { ButtonForm } from "@components/FormComponents/button-form";
import MessageErrorForm from "@components/FormComponents/message-error-form";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";

import { TenantSchemaType, tenantSchema } from "@type/forms/tenant";

const FormTenantModal = (): ReactNode => {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm<TenantSchemaType>({
    resolver: zodResolver(tenantSchema),
  });

  const handleTenantSubmit = (data: TenantSchemaType) => {
    console.log(data);
  };

  return (
    <div className="bg-white py-10 px-8 rounded-md border-2 border-zinc-700">
      <form onSubmit={handleSubmit(handleTenantSubmit)}>
        <h2 className="text-4xl text-violet-600 font-semibold">
          Criar novo Estabelecimento
        </h2>
        <p className="text-md text-zinc-600">
          Preeencha as informações para adicionar um novo Estabelecimento.
        </p>
        <div className="py-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            <div className="col-span-1">
              <Label>Nome do Proprietario</Label>
              <Input
                placeholder="Digite o nome..."
                className="cursor-pointer hover:border-violet-600"
                type="text"
                {...register("name")}
              />
              {errors.name && (
                <MessageErrorForm>{errors.name.message}</MessageErrorForm>
              )}
            </div>
            <div className="col-span-1">
              <Label>Email de acesso</Label>
              <Input
                placeholder="Digite o email..."
                className="cursor-pointer hover:border-violet-600"
                type="text"
                {...register("email")}
              />
              {errors.email && (
                <MessageErrorForm>{errors.email.message}</MessageErrorForm>
              )}
            </div>
            <div className="col-span-1">
              <Label>Senha</Label>
              <Input
                placeholder="Senha..."
                className="cursor-pointer hover:border-violet-600"
                type="text"
                {...register("password")}
              />
              {errors.password && (
                <MessageErrorForm>{errors.password.message}</MessageErrorForm>
              )}
            </div>
            <div className="col-span-1">
              <Label>Confime a senha</Label>
              <Input
                placeholder="Confirme a senha..."
                className="cursor-pointer hover:border-violet-600"
                type="text"
                {...register("confirmPass")}
              />
              {errors.confirmPass && (
                <MessageErrorForm>
                  {errors.confirmPass.message}
                </MessageErrorForm>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2 ">
              <Label>Nome do Estabelecimento</Label>
              <Input
                placeholder="Digite o nome..."
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500"
                type="text"
                {...register("tanantName")}
              />
              {errors.tanantName && (
                <MessageErrorForm>{errors.tanantName.message}</MessageErrorForm>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 col-span-1 ">
              <Label>Cor Primaria</Label>
              <Input
                placeholder="Digite uma cor"
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500"
                type="text"
                {...register("primaryColor")}
              />
              {errors.primaryColor && (
                <MessageErrorForm>
                  {errors.primaryColor.message}
                </MessageErrorForm>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 col-span-1">
              <Label>Cidade</Label>
              <Input
                placeholder="Cidade..."
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500"
                type="text"
                {...register("city")}
              />
              {errors.city && (
                <MessageErrorForm>{errors.city.message}</MessageErrorForm>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label>Telefone</Label>
              <Input
                placeholder="Ex: 015 998765432"
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500"
                type="text"
                {...register("phone")}
              />
              {errors.phone && (
                <MessageErrorForm>{errors.phone.message}</MessageErrorForm>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            asChild
            type="button"
            variant="secondary"
            className="text-zinc-800 hover:bg-zinc-200"
          >
            <Link href={pathname}>Cancelar</Link>
          </Button>
          <span>
            <ButtonForm pending={isLoading}>Criar novo</ButtonForm>
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormTenantModal;
