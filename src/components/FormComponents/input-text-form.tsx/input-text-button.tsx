"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";

interface Props {
  setToogleVisible: () => void;
  toogleVisible: boolean;
}

const InputTextFormbutton = ({ setToogleVisible, toogleVisible }: Props) => {
  return (
    <button
      type="button"
      className="absolute right-3 top-0 h-full"
      onClick={() => {
        setToogleVisible();
      }}
    >
      {toogleVisible ? (
        <EyeIcon className="w-5 h-5 text-zinc-800" />
      ) : (
        <EyeOffIcon className="w-5 h-5 text-zinc-800" />
      )}
    </button>
  );
};

export default InputTextFormbutton;
