import { Loader2 } from "lucide-react";

import FormComponent from "@components/FormComponents/form-login";
import FormRegister from "@components/FormComponents/form-register";
import { Skeleton } from "@ui/skeleton";
import * as TabsRoot from "@ui/tabs";

import { apiAdmin } from "@lib/api";

import { RegisterSchemaType } from "@type/forms/register";

interface Props {
  isLoading?: boolean;
}

const useApiAdmin = apiAdmin();

const FormsAdmin = ({ isLoading = false }: Props) => {
  const handleRegister = async (data: RegisterSchemaType) => {
    try {
      const res = await useApiAdmin.registerAmin(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      {isLoading && (
        <TabsRoot.TabsContent value="login">
          <div className="w-full border-2 rounded-lg border-zinc-600 h-[360px] p-6 relative">
            <div className="top-2 bottom-2 left-2 right-2  bg-zinc-600 rounded-lg bg-opacity-30 absolute z-10 flex justify-center items-center ">
              <Loader2 className="size-16 animate-spin text-violet-700" />
            </div>

            <div>
              <div className="space-y-2 mt-3">
                <Skeleton className="w-[132px] h-6 bg-zinc-600" />
                <Skeleton className="w-full h-4 bg-zinc-600" />
              </div>
              <div className="h-8" />
              <div className="space-y-2">
                <Skeleton className="w-[100px] h-5 bg-zinc-600" />
                <Skeleton className="w-full h-8 bg-zinc-600" />
              </div>
              <div className="h-6" />
              <div className="space-y-2">
                <Skeleton className="w-[100px] h-5 bg-zinc-600" />
                <Skeleton className="w-full h-8 bg-zinc-600" />
              </div>
              <Skeleton className="w-full h-9 mt-6 bg-zinc-600" />
            </div>
          </div>
        </TabsRoot.TabsContent>
      )}
      {!isLoading && (
        <>
          <TabsRoot.TabsContent value="login">
            <FormComponent />
          </TabsRoot.TabsContent>
          <TabsRoot.TabsContent value="register">
            <FormRegister handleRegister={handleRegister} />
          </TabsRoot.TabsContent>
        </>
      )}
    </TabsRoot.Tabs>
  );
};

export default FormsAdmin;
