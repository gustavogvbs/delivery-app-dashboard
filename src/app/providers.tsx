"use client";

import { ReactNode, useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@lib/query-client";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  const [queryClientState] = useState(() => queryClient);

  return (
    <QueryClientProvider client={queryClientState}>
      {children}
    </QueryClientProvider>
  );
}
