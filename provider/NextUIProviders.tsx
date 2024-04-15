"use client";

import { NextUIProvider } from "@nextui-org/react";

type childrenProps = {
  children: React.ReactNode;
};

const NextUIProviders = ({ children }: childrenProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export { NextUIProviders };
