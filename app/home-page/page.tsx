"use client";

import { Box, Stack } from "@mui/material";
import { Input } from "@/components/custom";
import type { ChangeEvent } from "react";

type TextFieldType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const HomePage = () => {
  const changeHander = ({ target }: TextFieldType) => {
    return target.value;
  };

  return (
    <Stack>
      <Box>
        <Input placeholderInput="NAME" onChangeInput={() => changeHander} />
      </Box>
    </Stack>
  );
};

export default HomePage;
