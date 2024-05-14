"use client";

import type { FC } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

type RTLProviderProps = {
  children: React.ReactNode;
};

const cacheRtl = createCache({
  key: "rtl-mode",
  stylisPlugins: [prefixer, rtlPlugin],
});

const RTLProvider: FC<RTLProviderProps> = ({ children }) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export { RTLProvider };
