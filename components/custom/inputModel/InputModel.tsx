"use client";

import { Box, type TextFieldProps } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import { InputModelComponent } from "./input.styled";
import { useState, type FC } from "react";

type TInputModel = {
  model: "iconModel" | "base";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
} & Omit<TextFieldProps, "label">;

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
  console.log("value===>", value);

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
        return;
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  return <Box>{InputView()}</Box>;
};

export { InputModel };
