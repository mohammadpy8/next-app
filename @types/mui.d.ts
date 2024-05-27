import type {
  Palette,
  PaletteOptions,
  Typography,
  TypographyVariantsOptions,
  ThemeOptions,
  ShapeOption,
  Shape,
} from "@mui/material";

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

  interface Shape {
    CustomRounded: {
      size: string;
    };
  }

  interface ShapeOption {
    CustomRounded: {
      size: string;
    };
  }
}
