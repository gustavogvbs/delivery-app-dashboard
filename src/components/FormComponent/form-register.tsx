"use client";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeOffIcon, EyeIcon } from "lucide-react";

import { Button } from "@ui/button";
import * as CardRoot from "@ui/card";
import { Input } from "@ui/input";
import { Label } from "@ui/label";

import { RegisterSchemaType, registerSchema } from "@type/forms/register";

const FormRegister = (): ReactNode => {
  const [toogleVisiblePassword, setToogleVisiblePassword] = useState(false);

  const { register, handleSubmit } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = (data: RegisterSchemaType) => {
    console.log(data);
  };

  return (
    <div className="max-w-[400px] w-full rounded-lg shadow-md shadow-zinc-800">
      <CardRoot.Card className="border-2 rounded-lg border-zinc-600 bg-zinc-800">
        <form onSubmit={handleSubmit(handleRegister)}>
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
                <Input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  className="border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline focus-visible:outline-zinc-600 focus:outline-zinc-600"
                  {...register("name")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="phone"
                  className="text-md text-gray-100 font-medium"
                >
                  Telefone
                </Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Digite seu email de login"
                  className="border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline focus-visible:outline-zinc-600 focus:outline-zinc-600"
                  {...register("phone")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-md text-gray-100 font-medium"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Digite seu email de login"
                  className="border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline focus-visible:outline-zinc-600 focus:outline-zinc-600"
                  {...register("email")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-md text-gray-100 font-medium"
                  >
                    Senha
                  </Label>
                  <div className="relative">
                    <Input
                      type={toogleVisiblePassword ? "text" : "password"}
                      id="password"
                      placeholder="Digite sua senha"
                      className="border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline focus-visible:outline-zinc-600 focus:outline-zinc-600 pr-10"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-0 h-full"
                      onClick={(e) => {
                        e.preventDefault();
                        setToogleVisiblePassword(!toogleVisiblePassword);
                      }}
                    >
                      {toogleVisiblePassword ? (
                        <EyeIcon className="w-5 h-5 text-zinc-900" />
                      ) : (
                        <EyeOffIcon className="w-5 h-5 text-zinc-900" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="confirmPass"
                    className="text-md text-gray-100 font-medium"
                  >
                    Senha
                  </Label>
                  <div className="relative">
                    <Input
                      type={toogleVisiblePassword ? "text" : "password"}
                      id="confirmPass"
                      placeholder="Digite sua senha"
                      className="border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline focus-visible:outline-zinc-600 focus:outline-zinc-600 pr-10"
                      {...register("confirmPass")}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-0 h-full"
                      onClick={(e) => {
                        e.preventDefault();
                        setToogleVisiblePassword(!toogleVisiblePassword);
                      }}
                    >
                      {toogleVisiblePassword ? (
                        <EyeIcon className="w-5 h-5 text-zinc-900" />
                      ) : (
                        <EyeOffIcon className="w-5 h-5 text-zinc-900" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardRoot.CardContent>
          <CardRoot.CardFooter>
            <div className="w-full">
              <Button
                type="submit"
                size="default"
                className="w-full bg-violet-600 hover:bg-violet-700"
              >
                Registar
              </Button>
            </div>
          </CardRoot.CardFooter>
        </form>
      </CardRoot.Card>
    </div>
  );
};

export default FormRegister;
