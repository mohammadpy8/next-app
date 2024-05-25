"use client";

import { ButtonBase } from "@/components/custom";
import { Stack } from "@mui/material";

const LoginForm = () => {
  return (
    <Stack width="100%" height="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <ButtonBase
        lable="name"
        type="submit"
        customSX={{
          backgroundColor: "#ff0",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
        onClick={() => console.log("click")}
      />
    </Stack>
  );
};

export default LoginForm;
