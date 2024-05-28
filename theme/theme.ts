"use client";

import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({
  palette,
  direction: "rtl",
  typography,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "fillMode" },
          style: {
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "5rem",
            padding: "0.2rem 1rem",
          },
        },
      ],
    },
  },
});

export { theme };
