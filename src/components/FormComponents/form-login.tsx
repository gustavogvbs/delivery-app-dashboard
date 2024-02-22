"use client";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { apiAdmin } from "@lib/api";

import { ButtonForm } from "@components/FormComponents/button-form";
import { Button } from "@ui/button";
import * as CardRoot from "@ui/card";
import { Label } from "@ui/label";

import { LoginSchemaType, loginSchema } from "@type/forms/login";

import { InputTextForm } from "./input-text-form.tsx";
import MessageErrorForm from "./message-error-form";

const FormComponent = (): ReactNode => {
  const useApiAdmin = apiAdmin();

  const [toogleVisiblePassword, setToogleVisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const handleLoginSubmit = async (data: LoginSchemaType) => {
    try {
      const user = await useApiAdmin.loginAmin(data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[400px] w-full rounded-lg shadow-md shadow-zinc-800">
      <CardRoot.Card className="border-2 rounded-lg border-zinc-600 bg-zinc-800">
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <CardRoot.CardHeader>
            <CardRoot.CardTitle className="text-gray-100 text-2xl font-bold">
              Dashboard
            </CardRoot.CardTitle>
            <CardRoot.CardDescription className="text-zinc-400 text-sm">
              Faça o login para acessar o Dashboard
            </CardRoot.CardDescription>
          </CardRoot.CardHeader>

          <CardRoot.CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-md text-gray-100 font-medium"
                >
                  Email
                </Label>
                <InputTextForm.root
                  id="email"
                  disabled={isLoading}
                  placeholder="Digite seu email"
                  type="email"
                  error={!!errors.email}
                  register={register("email")}
                />

                {errors.email && (
                  <MessageErrorForm>{errors.email.message}</MessageErrorForm>
                )}
              </div>
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
                  type="password"
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
                  <MessageErrorForm>{errors.password.message}</MessageErrorForm>
                )}
              </div>
            </div>
          </CardRoot.CardContent>
          <CardRoot.CardFooter>
            <div className="w-full">
              <p className="text-zinc-100 text-sm mb-1">
                Esqueceu a senha?{" "}
                <Button
                  type="button"
                  className="w-auto px-1 text-violet-500"
                  variant="link"
                >
                  Click aqui
                </Button>
              </p>
              <ButtonForm pending={isLoading} />
            </div>
          </CardRoot.CardFooter>
        </form>
      </CardRoot.Card>
    </div>
  );
};

export default FormComponent;
