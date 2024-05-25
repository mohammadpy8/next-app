import { Box, Button } from "@mui/material";
import type { ComponentProps, FC } from "react";

type TButtonProps = {
  lable: string;
  type: "submit";
  customSX?: any;
} & Omit<ComponentProps<typeof Button>, "type">;

const ButtonBase: FC<TButtonProps> = ({
  lable = "button-component",
  type: typeButton,
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
