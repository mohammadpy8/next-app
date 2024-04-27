import type { Palette, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    customPalette?: {
      firstColor: string;
      green?: string;
    };
  }
  interface PaletteOptions {
    customPalette?: {
      firstColor: string;
      green?: string;
    };
  }
}
