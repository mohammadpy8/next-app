"use client";

import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({
  palette,
  direction: "rtl",
  typography,
});

export { theme };
