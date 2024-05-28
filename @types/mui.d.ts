import type { Palette, PaletteOptions, Typography, TypographyVariantsOptions, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    customPalette: {
      firstColor: string;
      green: string;
    };
    inputColor: {
      first: string;
      second: string;
      last: string;
    };
  }
  interface PaletteOptions {
    customPalette: {
      firstColor: string;
      green: string;
    };
    inputColor: {
      first: string;
      second: string;
      last: string;
    };
  }

  interface Typography {
    base_text: {
      fontSize: string;
      fontWeight: string;
    };
  }

  interface TypographyVariantsOptions {
    base_text: {
      fontSize: string;
      fontWeight: string;
    };
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    baseMode: true;
    loadingMode: true;
    outlineMode: true;
    fillMode: true;
  }
}
