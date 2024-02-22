"use client";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { ButtonForm } from "@components/FormComponents/button-form";
import * as CardRoot from "@ui/card";
import { Label } from "@ui/label";

import { RegisterSchemaType, registerSchema } from "@type/forms/register";

import { InputTextForm } from "./input-text-form.tsx";
import MessageErrorForm from "./message-error-form";

interface Props {
  handleRegister: (data: RegisterSchemaType) => Promise<void>;
}

const FormRegister = ({ handleRegister }: Props): ReactNode => {
  const [toogleVisiblePassword, setToogleVisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegsiterSubmit = async (data: RegisterSchemaType) => {
    if (data.confirmPass === data.password) {
      try {
        await handleRegister(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-[400px] w-full rounded-lg shadow-md shadow-zinc-800">
      <CardRoot.Card className="border-2 rounded-lg border-zinc-600 bg-zinc-800">
        <form onSubmit={handleSubmit(handleRegsiterSubmit)}>
          <CardRoot.CardHeader className="pb-4">
            <CardRoot.CardTitle className="text-gray-100 text-2xl font-bold">
              Registar
            </CardRoot.CardTitle>
          </CardRoot.CardHeader>
          <CardRoot.CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-md text-gray-100 font-medium"
                >
                  Nome
                </Label>
                <InputTextForm.root
                  disabled={isLoading}
                  error={!!errors.name}
                  register={register("name")}
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                />
                {errors.name && (
                  <MessageErrorForm>{errors.name.message}</MessageErrorForm>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="phone"
                  className="text-md text-gray-100 font-medium"
                >
                  Telefone
                </Label>
                <InputTextForm.root
                  disabled={isLoading}
                  error={!!errors.phone}
                  register={register("phone")}
                  id="phone"
                  type="text"
                  placeholder="Digite número de telefone"
                />
                {errors.phone && (
                  <MessageErrorForm>{errors.phone.message}</MessageErrorForm>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-md text-gray-100 font-medium"
                >
                  Email
                </Label>
                <InputTextForm.root
                  disabled={isLoading}
                  error={!!errors.email}
                  register={register("email")}
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                />
                {errors.email && (
                  <MessageErrorForm>{errors.email.message}</MessageErrorForm>
                )}
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-md text-gray-100 font-medium"
                  >
                    Senha
                  </Label>
                  <InputTextForm.root
                    id="password"
                    disabled={isLoading}
                    placeholder="Digite sua senha"
                    type={toogleVisiblePassword ? "password" : "text"}
                    error={!!errors.password}
                    register={register("password")}
                  >
                    <InputTextForm.button
                      toogleVisible={toogleVisiblePassword}
                      setToogleVisible={() =>
                        setToogleVisiblePassword(!toogleVisiblePassword)
                      }
                    />
                  </InputTextForm.root>
                  {errors.password && (
                    <MessageErrorForm>
                      {errors.password.message}
                    </MessageErrorForm>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="confirmPass"
                    className="text-md text-gray-100 font-medium"
                  >
                    Senha
                  </Label>
                  <InputTextForm.root
                    id="confirmPass"
                    disabled={isLoading}
                    placeholder="Digite sua senha"
                    type={toogleVisiblePassword ? "password" : "text"}
                    error={!!errors.confirmPass}
                    register={register("confirmPass")}
                  >
                    <InputTextForm.button
                      toogleVisible={toogleVisiblePassword}
                      setToogleVisible={() =>
                        setToogleVisiblePassword(!toogleVisiblePassword)
                      }
                    />
                  </InputTextForm.root>
                  {errors.confirmPass &&
                    errors.confirmPass?.type !== "custom" && (
                      <MessageErrorForm>
                        {errors.confirmPass.message}
                      </MessageErrorForm>
                    )}
                </div>
                <div className="col-span-2">
                  {errors.confirmPass?.type === "custom" && (
                    <MessageErrorForm>
                      {errors.confirmPass.message}
                    </MessageErrorForm>
                  )}
                </div>
              </div>
            </div>
          </CardRoot.CardContent>
          <CardRoot.CardFooter>
            <div className="w-full">
              <ButtonForm pending={isLoading} />
            </div>
          </CardRoot.CardFooter>
        </form>
      </CardRoot.Card>
    </div>
  );
};

export default FormRegister;
