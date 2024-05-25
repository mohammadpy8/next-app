import { Box, Button } from "@mui/material";
import type { ComponentProps, FC } from "react";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";

type TButtonProps = {
  lable: string;
  type: "submit" | "button";
  customSX?: MuiCSSObject;
  variant: "contained" | "outlined";
} & Omit<ComponentProps<typeof Button>, "type" | "variant">;

const ButtonBase: FC<TButtonProps> = ({
  lable = "متن داخل دکمه",
  type: typeButton = "button",
  customSX,
  onClick: clickHandler = () => {},
  variant = "contained",
  ...restButtonProps
}) => {
  return (
    <Box>
      <Button
        variant={variant}
        {...restButtonProps}
        disableRipple
        type={typeButton}
        sx={{
          textTransform: "lowercase",
          boxShadow: "none !important",
          "&:hover": {
            boxShadow: "none !importan",
          },
          ...customSX,
        }}
        onClick={clickHandler}
      >
        {lable}
      </Button>
    </Box>
  );
};

export { ButtonBase };
