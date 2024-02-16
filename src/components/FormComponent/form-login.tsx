"use client";
import { ReactNode, useState } from "react";

import { EyeOffIcon, EyeIcon } from "lucide-react";

import { Button } from "@ui/button";
import * as CardRoot from "@ui/card";
import { Input } from "@ui/input";
import { Label } from "@ui/label";

const FormComponent = (): ReactNode => {
  const [toogleVisiblePassword, setToogleVisiblePassword] = useState(false);

  return (
    <div className="max-w-[400px] w-full rounded-lg shadow-md shadow-zinc-800">
      <CardRoot.Card className="border-2 rounded-lg border-zinc-600 bg-zinc-800">
        <form action="" method="post">
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
                <Input
                  type="email"
                  id="email"
                  placeholder="Digite seu email de login"
                  className="border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline focus-visible:outline-zinc-600 focus:outline-zinc-600"
                />
              </div>
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
                  />
                  <button
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
              <Button
                type="submit"
                size="default"
                className="w-full bg-violet-600 hover:bg-violet-700"
              >
                Logar
              </Button>
            </div>
          </CardRoot.CardFooter>
        </form>
      </CardRoot.Card>
    </div>
  );
};

export default FormComponent;
