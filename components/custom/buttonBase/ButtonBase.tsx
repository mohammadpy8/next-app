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
    base: { width: "100px", heigth: "50px" },
    normal: { width: "125px", height: "55px" },
    large: { width: "175px", height: "60px" },
    extraLarge: { width: "200px", heigth: "65px" },
  };

  const StyleVariantMode = {
    contained: {
      backgroundColor: "blue",
      color: "#fff",
      borderRadius: "15px",
      transition: "all 0.2s linear",
      "&:hover": { backgroundColor: "blue", outline: "4px solid #6a76ff" },
    },
    outlined: {
      backgroundColor: "transparent",
      color: "blue",
      border: "4px solid blue",
      borderRadius: "15px",
      transition: "all 0.2s linear",
      "&:hover": { backgroundColor: "#e7e7fe" },
    },
  };

  const StyleDisable = {
    backgroundColor: "#979797",
    color: "#fff !important",
    borderRadius: "10px",
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
