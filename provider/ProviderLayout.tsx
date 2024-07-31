"use client";
import type { FC } from "react";
import {
  MuiProvider,
  NextUIProviders,
  ReactQueryClientProvider,
  ToastProvider,
  RTLProvider,
  // LoadingProvider,
} from "@/provider";
import { UserContextProvider } from "@/context";

type PropsProviderLayout = Readonly<{
  children: React.ReactNode;
}>;

const ProviderLayout: FC<PropsProviderLayout> = ({ children }) => {
  return (
    // <LoadingProvider>
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
    // </LoadingProvider>
  );
};

export { ProviderLayout };
