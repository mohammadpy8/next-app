import { Box } from "@mui/material";
import { InputModelComponent, InputAdormentCustom } from "./input.styled";
import React, { type FC } from "react";
import type { TInputModel } from "./input.type";

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
            width={width}
            height={height}
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
            InputProps={PositionIconHandle()}
            width={width}
            height={height}
          />
        );
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  return <Box>{InputView()}</Box>;
};

export { InputModel };
