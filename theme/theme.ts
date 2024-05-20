"use client";

import { createTheme } from "@mui/material";
import { palette, typography } from "@/theme";

const theme = createTheme({
  palette:{},
  direction: "rtl",
  typography: {
    base_text: {
      fontSize: "15px",
      fontWeight: "500",
    },
  },
});

export { theme };
