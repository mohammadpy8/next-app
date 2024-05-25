import { Box, Button } from "@mui/material";
import type { ComponentProps, FC } from "react";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";

type TButtonProps = {
  lable: string;
  type: "submit" | "button";
  customSX?: MuiCSSObject;
} & Omit<ComponentProps<typeof Button>, "type">;

const ButtonBase: FC<TButtonProps> = ({
  lable = "متن داخل دکمه",
  type: typeButton = "button",
  customSX,
  onClick: clickHandler = () => {},
  ...restButtonProps
}) => {
  return (
    <Box>
      <Button
        variant="contained"
        {...restButtonProps}
        disableRipple
        type={typeButton}
        sx={{
          textTransform: "lowercase",
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
