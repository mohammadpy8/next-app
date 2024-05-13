"use client";
import { theme } from "@/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const MuiProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { MuiProvider };
