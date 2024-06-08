"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect, type FC, type ReactNode } from "react";

type TLoadingProvider = {
  children: ReactNode;
};

const LoadingProvider: FC<TLoadingProvider> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleChangeRoute = () => setLoading(true);

    router.events.on("routeChangeStart", handleChangeRoute);
    return () => {
      router.events.off("routeChangeStart", handleChangeRoute);
    };
  }, [router]);

  return <Box>{loading ? "loading" : children}</Box>;
};

export { LoadingProvider };
