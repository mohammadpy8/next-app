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
  const StyleModeButton = () => {
    return {
      SizeMode: (typeSize: TSizeButton) => {
        switch (typeSize) {
          case "base":
            return {
              width: "75px",
            };
          case "normal":
            return {
              width: "100px",
            };
          case "large":
            return {
              width: "125px",
            };
          case "extraLarge":
            return {
              width: "175px",
            };
          default:
            throw new Error("تایپ مورد نظر وجود ندارد");
        }
      },
      VariantMode: (typeVariant: TVariant, disableMode: boolean) => {
        if (!disableMode) {
          switch (typeVariant) {
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
            color: "#fff !important",
            borderRaduis: "15px",
          };
        }
      },
    };
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
            ...StyleModeButton().SizeMode(size),
          },
          "&:hover": {
            boxShadow: "none !important",
          },
          ...customSX,
          ...StyleModeButton().VariantMode(variant, disableMode),
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
