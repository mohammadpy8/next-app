"use client"

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222",
    },
    secondary: {
      main: "#555",
    },
  },
  typography: {
    h1: {
      fontSize: "10px",
      fontWeight: "bold",
    },
  },
});

export { theme };
