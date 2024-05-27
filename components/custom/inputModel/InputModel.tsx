import { Box, type TextFieldProps, InputAdornment, TextField } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import { InputModelComponent, InputAdormentCustom } from "./input.styled";
import React, { type FC, type ReactNode } from "react";

type TInputBase = {
  model: "base";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  width?: string;
  iconInput: never;
  positionIcon: never;
  height?: string;
} & Omit<TextFieldProps, "label">;

type TInputIconBase = {
  model: "iconModel";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  iconInput: ReactNode;
  positionIcon: "start" | "end";
  width?: string;
  height?: string;
} & Omit<TextFieldProps, "label">;

type TInputModel = TInputBase | TInputIconBase;

const InputModel: FC<TInputModel> = ({
  model = "base",
  onChange: changeHandler = () => {},
  placeholder = "متن داخل تکست فیلد",
  label = null,
  customSX,
  status = "normal",
  iconInput,
  positionIcon = "start",
  height,
  width,
  ...restInputModel
}) => {
  const PositionIconHandle = () => {
    if (positionIcon === "start") {
      return {
        startAdornment: <InputAdormentCustom position="start">{iconInput}</InputAdormentCustom>,
      };
    } else if (positionIcon === "end") {
      return {
        endAdornment: <InputAdormentCustom position="start">{iconInput}</InputAdormentCustom>,
      };
    }
    return;
  };

  const InputView = () => {
    switch (model) {
      case "base":
        return (
          <InputModelComponent
            autoComplete="off"
            className={`text-filed-model-${status}`}
            onChange={changeHandler}
            placeholder={placeholder}
            label={label ?? null}
            sx={{ ...customSX }}
            {...restInputModel}
            {...{ width, height }}
          />
        );
      case "iconModel":
        return (
          <InputModelComponent
            autoComplete="off"
            className={`text-filed-model-${status}`}
            onChange={changeHandler}
            sx={{ ...customSX }}
            label={label ?? null}
            placeholder={placeholder}
            {...restInputModel}
            {...{ width, height }}
            InputProps={PositionIconHandle()}
          />
        );
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  return <Box>{InputView()}</Box>;
};

export { InputModel };
