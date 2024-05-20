import type { Palette, PaletteOptions, Typography, TypographyVariantsOptions } from "@mui/material";

/**
 * Form for user login
 * @param {bool} submitting Shows if form submitting is in progress
 * @param {function} handleSubmit Form submit callback function
 */
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
