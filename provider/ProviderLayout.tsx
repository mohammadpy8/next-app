import type { FC } from "react";
import { MuiProvider, NextUIProviders, ReactQueryClientProvider, ToastProvider } from "@/provider";

type PropsProviderLayout = {
  children: Readonly<React.ReactNode>;
};

const ProviderLayout: FC<PropsProviderLayout> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <MuiProvider>
        <NextUIProviders>
          <ToastProvider />
          {children}
        </NextUIProviders>
      </MuiProvider>
    </ReactQueryClientProvider>
  );
};

export { ProviderLayout };
