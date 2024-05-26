import { Box, TextField, type TextFieldProps } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import type { FC } from "react";

type TInputModel = {
  model: "iconModel" | "base";
  label?: string;
  customSX?: MuiCSSObject;
} & Omit<TextFieldProps, "label">;

const InputModel: FC<TInputModel> = ({
  model = "base",
  onChange: changeHandler = () => {},
  placeholder = "متن داخل تکست فیلد",
  label = "متن بالای تکست فیلد",
  customSX,
  ...restInputModel
}) => {
  const InputView = () => {
    switch (model) {
      case "base":
        return (
          <TextField
            onChange={changeHandler}
            placeholder={placeholder}
            label={label}
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
