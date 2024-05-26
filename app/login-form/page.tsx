"use client";

import { ButtonBase, ButtonWithIcon, InputModel } from "@/components/custom";
import { Box, Stack } from "@mui/material";
import { IoSend } from "react-icons/io5";

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
      {/* <ButtonWithIcon
        lable="با ایکون"
        type="button"
        onClick={() => {}}
        variant="contained"
        size="extraLarge"
        disableMode={false}
        endIcon={<IoSend />}
      /> */}
      <Box mt="25px">
        <InputModel model="base" label="متن"  />
      </Box>
    </Stack>
  );
};

export default LoginForm;
