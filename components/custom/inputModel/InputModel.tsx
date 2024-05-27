"use client";

import { Box, type TextFieldProps, InputAdornment, TextField } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import { InputModelComponent } from "./input.styled";
import { useState, type FC } from "react";

type TInputModel = {
  model: "iconModel" | "base";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
} & Omit<TextFieldProps, "label">;

type TInputBase = {};

const InputModel: FC<TInputModel> = ({
  model = "base",
  onChange: changeHandler = () => {},
  placeholder = "متن داخل تکست فیلد",
  label = null,
  customSX,
  status = "normal",
  ...restInputModel
}) => {
  const [value, setValue] = useState<string>("");
  console.log("value==>", value);

  const InputView = () => {
    switch (model) {
      case "base":
        return (
          <InputModelComponent
            value={value}
            className={`text-filed-model-${status}`}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
            label={label ?? null}
            sx={{
              ...customSX,
            }}
            {...restInputModel}
          />
        );
      case "iconModel":
        return (
          // <InputModelComponent
          //   value={value}
          //   className={`text-filed-model-${status}`}
          //   onChange={(event) => setValue(event.target.value)}
          //   // placeholder={placeholder}
          //   label={label ?? null}
          //   sx={{
          //     ...customSX,
          //   }}
          //   {...restInputModel}
          //   inputProps={{
          //     startAdornment: <InputAdornment position="start">mohammadf</InputAdornment>,
          //   }}
          // />
          <InputModelComponent 
            // label="With normal TextField"
            className={`text-filed-model-${status}`}
            // id="filled-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            }}
            // variant="filled"
          />
        );
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  return <Box>{InputView()}</Box>;
};

export { InputModel };
