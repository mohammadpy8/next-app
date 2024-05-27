import type { TextFieldProps } from "@mui/material";
import type { ReactNode } from "react";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";

type TInputBase = {
  model: "base";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  width?: string;
  iconInput?: never;
  positionIcon?: never;
  height?: string;
} & Omit<TextFieldProps, "label" | "className">;

type TInputIconBase = {
  model: "iconModel";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  iconInput: ReactNode;
  positionIcon: "start" | "end";
  width?: string;
  height?: string;
} & Omit<TextFieldProps, "label" | "className">;

export type TInputModel = TInputBase | TInputIconBase;
