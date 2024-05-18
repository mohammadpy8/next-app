"use client";
import type { FC } from "react";
import { MuiProvider, NextUIProviders, ReactQueryClientProvider, ToastProvider, RTLProvider } from "@/provider";
import { UserContextProvider } from "@/context";

type PropsProviderLayout = Readonly<{
  children: React.ReactNode;
}>;

const ProviderLayout: FC<PropsProviderLayout> = ({ children }) => {
  return (
    <MuiProvider>
      <RTLProvider>
        <UserContextProvider>
          <ReactQueryClientProvider>
            <NextUIProviders>
              <ToastProvider />
              {children}
            </NextUIProviders>
          </ReactQueryClientProvider>
        </UserContextProvider>
      </RTLProvider>
    </MuiProvider>
  );
};

export { ProviderLayout };
