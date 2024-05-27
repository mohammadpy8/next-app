"use client";

import { Box, type TextFieldProps, InputAdornment, TextField } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import { InputModelComponent } from "./input.styled";
import React, { useState, type FC, type ReactNode } from "react";
import { FaUserAlt } from "react-icons/fa";

type TInputModel = {
  model: "iconModel" | "base";
  label?: string | null;
  customSX?: MuiCSSObject;
  status?: "error" | "warning" | "normal";
  iconInput?: ReactNode;
} & Omit<TextFieldProps, "label">;

type TInputBase = {};

const InputModel: FC<TInputModel> = ({
  model = "base",
  onChange: changeHandler = () => {},
  placeholder = "متن داخل تکست فیلد",
  label = null,
  customSX,
  status = "normal",
  iconInput,
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
          <InputModelComponent
            className={`text-filed-model-${status}`}
            sx={{ m: 1, width: "25ch", ...customSX }}
            label={label ?? null}
            placeholder={placeholder}
            {...restInputModel}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    color: "#a8a8a8 !important",
                    zIndex: 10,
                    "& p": {
                      color: "#a8a8a8",
                      zIndex: 10,
                    },
                  }}
                >
                  {iconInput}
                </InputAdornment>
              ),
            }}
          />
        );
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  return <Box>{InputView()}</Box>;
};

export { InputModel };
