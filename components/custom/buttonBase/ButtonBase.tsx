import { Box, ButtonProps, Button } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import type { ComponentProps, FC } from "react";

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
  const SizeMode = (type: TSizeButton) => {
    switch (type) {
      case "base":
        return "75px";
      case "normal":
        return "100px";
      case "large":
        return "125px";
      case "extraLarge":
        return "150px";
      default:
        throw new Error("تایپ مورد نظر وجود ندارد");
    }
  };

  const VariantMode = (type: TVariant, disableMode: boolean) => {
    if (!disableMode) {
      switch (type) {
        case "contained":
          return {
            backgroundColor: "#ff0",
            color: "#000",
            borderRaduis: "15px",
          };
        case "outlined":
          return {
            backgroundColor: "transparent",
            color: "blue",
            border: "3px solid blue",
            borderRaduis: "15px",
          };
        default:
          throw new Error("تایپ مورد نظر وجود ندارد");
      }
    } else {
      return {
        backgroundColor: "#979797",
        color: "#fff",
        borderRaduis: "15px",
      };
    }
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
            width: SizeMode(size),
          },
          "&:hover": {
            boxShadow: "none !importan",
          },
          ...customSX,
          ...VariantMode(variant, disableMode),
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
