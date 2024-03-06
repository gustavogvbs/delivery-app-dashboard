"use client";

import { Loader2 } from "lucide-react";

import { Button } from "../ui/button";

interface Props {
  pending: boolean;
  children?: string;
}

export const ButtonForm = ({ pending, children }: Props) => {
  return (
    <Button
      disabled={pending}
      type="submit"
      size="default"
      className="w-full bg-violet-600 hover:bg-violet-700"
    >
      {children ? children : "Entrar"}
      {pending && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
    </Button>
  );
};
