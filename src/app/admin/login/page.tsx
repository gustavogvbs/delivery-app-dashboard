"use client";

import { ReactNode } from "react";

import FormComponent from "@components/FormComponent/form-login";
import FormRegister from "@components/FormComponent/form-register";
import * as TabsRoot from "@ui/tabs";

import { RegisterSchemaType } from "@type/forms/register";

const TenantLogin = (): ReactNode => {
  const handleRegister = (data: RegisterSchemaType) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen px-2 flex flex-col gap-10 pt-[10vh] bg-zinc-900">
      <div className="max-w-[380px] mx-auto">
        <h1 className="text-4xl  font-bold text-zinc-100 text-center">
          Acesso ao Dashboard
          <span className="text-violet-500 py-2 block">DeliveryApp</span>
          de Admin
        </h1>
      </div>
      <div className="flex justify-center items-center  min-h-full">
        <TabsRoot.Tabs className="w-full max-w-[400px]" defaultValue="login">
          <TabsRoot.TabsList className="w-full h-12 bg-zinc-900 border-2 border-zinc-600 text-zinc-500">
            <TabsRoot.TabsTrigger
              value="login"
              className="w-full font-bold text-md h-full data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
            >
              Log in
            </TabsRoot.TabsTrigger>
            <TabsRoot.TabsTrigger
              value="register"
              className="w-full font-bold text-md h-full data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
            >
              Sig in
            </TabsRoot.TabsTrigger>
          </TabsRoot.TabsList>
          <TabsRoot.TabsContent value="login">
            <FormComponent />
          </TabsRoot.TabsContent>
          <TabsRoot.TabsContent value="register">
            <FormRegister handleRegister={handleRegister} />
          </TabsRoot.TabsContent>
        </TabsRoot.Tabs>
      </div>
    </section>
  );
};

export default TenantLogin;
