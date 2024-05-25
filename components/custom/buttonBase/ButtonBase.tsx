import { Box, type ButtonProps, Button } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import type { FC } from "react";

type TSizeButton = "base" | "normal" | "large" | "extraLarge";
type TVariant = "contained" | "outlined";

type TButtonProps = {
  lable: string;
  type: "submit" | "button";
  customSX?: MuiCSSObject;
  variant: TVariant;
  size?: TSizeButton;
  disableMode: boolean;
} & Omit<ButtonProps, "type" | "variant" | "size">;

const ButtonBase: FC<TButtonProps> = ({
  lable = "متن داخل دکمه",
  type: typeButton = "button",
  customSX,
  onClick: clickHandler = () => {},
  variant = "contained",
  size = "base",
  disableMode = false,
  ...restButtonProps
}) => {
  const StyleSizeMode = {
    base: { width: "100px" },
    normal: { width: "125px" },
    large: { width: "175px" },
    extraLarge: { width: "200px" },
  };

  const StyleVariantMode = {
    contained: { backgroundColor: "#ff0", color: "#000", borderRaduis: "15px" },
    outlined: { backgroundColor: "transparent", color: "blue", border: "3px solid blue", borderRaduis: "15px" },
  };

  const StyleDisable = {
    backgroundColor: "#979797",
    color: "#fff !important",
    borderRaduis: "15px",
  };

  return (
    <Box>
      <Button
        {...restButtonProps}
        disableRipple
        type={typeButton}
        sx={{
          textTransform: "lowercase",
          boxShadow: "none !important",
          "&.MuiButtonBase-root": {
            ...StyleSizeMode[size],
          },
          "&:hover": {
            boxShadow: "none !important",
          },
          ...customSX,
          ...(!disableMode ? StyleVariantMode[variant] : StyleDisable),
        }}
        onClick={clickHandler}
        disabled={(disableMode ? true : false) ?? false}
      >
        {lable}
      </Button>
    </Box>
  );
};

export { ButtonBase };
