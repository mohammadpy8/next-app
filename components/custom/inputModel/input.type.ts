import type { TextFieldProps } from "@mui/material";
import type { ReactNode } from "react";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import type { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

type TInputBase = {
  model: "base";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  width?: string;
  iconInput?: never;
  positionIcon?: never;
  height?: string;
  name: string;
  registerInput: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
} & Omit<TextFieldProps, "label" | "className" | "name">;

type TInputIconBase = {
  model: "iconModel";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  iconInput: ReactNode;
  positionIcon: "start" | "end";
  width?: string;
  height?: string;
  name: string;
  registerInput: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
} & Omit<TextFieldProps, "label" | "className" | "name">;

export type TInputModel = TInputBase | TInputIconBase;
