"use client";
import type { FC } from "react";
import { MuiProvider, NextUIProviders, ReactQueryClientProvider, ToastProvider, RTLProvider } from "@/provider";

type PropsProviderLayout = Readonly<{
  children: React.ReactNode;
}>;

const ProviderLayout: FC<PropsProviderLayout> = ({ children }) => {
  return (
    <MuiProvider>
      <RTLProvider>
        <ReactQueryClientProvider>
          <NextUIProviders>
            <ToastProvider />
            {children}
          </NextUIProviders>
        </ReactQueryClientProvider>
      </RTLProvider>
    </MuiProvider>
  );
};

export { ProviderLayout };
