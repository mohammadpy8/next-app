"use client";

import { ButtonBase } from "@/components/custom";
import { Stack } from "@mui/material";

const LoginForm = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginTop="25px"
    >
      <ButtonBase
        lable="ارسال اطلاعات"
        type="submit"
        onClick={() => console.log("click")}
        variant="contained"
        size="large"
        disableMode={false}
      />
    </Stack>
  );
};

export default LoginForm;
