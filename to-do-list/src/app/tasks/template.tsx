"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/queryClient";

interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Template;
