import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@ui/input";

interface Props {
  error: boolean;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  children?: ReactNode;
  type?: HTMLInputTypeAttribute;
  id: string;
  disabled: boolean;
}

const InputTextRoot = ({
  error,
  register,
  children,
  id,
  disabled,
  ...props
}: Props) => {
  return (
    <div className="relative">
      <Input
        disabled={disabled}
        id={id}
        data-error={error}
        className="pr-10 border-zinc-900 text-zinc-900 bg-gray-100 focus-visible:outline-1 focus-visible:outline-violet-600 focus:outline-violet-600 focus:border-none data-[error=true]:border-2 data-[error=true]:border-red-700"
        {...props}
        {...register}
      />
      {children && children}
    </div>
  );
};

export default InputTextRoot;
