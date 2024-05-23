import { Box, Button } from "@mui/material";
import { ComponentProps } from "react";

type PropsButtonCustomType = {
  lable: string;
} & ComponentProps<"button">;

const ButtonCustom = ({ lable, ...rest }: PropsButtonCustomType) => {
  return (
    <Box>
      <button {...rest}>{lable}</button>
    </Box>
  );
};

export { ButtonCustom };
