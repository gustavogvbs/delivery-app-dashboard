import { ReactNode } from "react";

import FormComponent from "@components/FormComponents/form-login";

const TenantLogin = (): ReactNode => {
  return (
    <section className="min-h-screen px-2 flex flex-col gap-16 pt-[10vh] bg-zinc-900">
      <div className="max-w-[380px] mx-auto">
        <h1 className="text-4xl  font-bold text-zinc-100 text-center">
          Acesso ao Dashboard
          <span className="text-violet-500 py-2 block">DeliveryApp</span>
          de Estabelecimento
        </h1>
      </div>
      <div className="flex justify-center items-center  min-h-full ">
        <FormComponent />
      </div>
    </section>
  );
};

export default TenantLogin;
