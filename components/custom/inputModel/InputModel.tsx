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
  name,
  registerInput,
  ...restInputModel
}) => {
  console.log("data of input=====>", restInputModel);
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
            // onChange={changeHandler}
            placeholder={placeholder}
            label={label ?? null}
            sx={{ ...customSX }}
            {...restInputModel}
            {...registerInput(name)}
            width={width}
            height={height}
            name={name}
          />
        );
      case "iconModel":
        return (
          <InputModelComponent
            autoComplete="off"
            className={`text-filed-model-${status}`}
            // onChange={changeHandler}
            sx={{ ...customSX }}
            label={label ?? null}
            placeholder={placeholder}
            {...restInputModel}
            InputProps={PositionIconHandle()}
            width={width}
            {...registerInput(name)}
            height={height}
            name={name}
          />
        );
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  return <Box>{InputView()}</Box>;
};

export { InputModel };
