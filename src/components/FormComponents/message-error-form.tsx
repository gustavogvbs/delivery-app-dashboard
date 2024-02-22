"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MessageErrorForm = ({ children }: Props) => {
  return (
    <span className="text-red-700 font-medium text-xs pt-0.5">{children}</span>
  );
};

export default MessageErrorForm;
