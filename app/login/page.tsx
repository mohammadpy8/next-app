"use client";

import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { type ChangeEvent, useState, type FC, type MouseEvent } from "react";
import Trakhine from "./tarkhine";
import { ApiRegister } from "@/config";
import { useRouter } from "next/navigation";

type TextFieldType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Login: FC = () => {
  const router = useRouter();

  const [numberPhone, setNumberPhone] = useState<string>("");

  const { PostRequest } = ApiRegister();
  const _changePhoneNumberHandler = (event: TextFieldType) => {
    setNumberPhone(event.target.value);
  };

  const { PostData, data, error, isPending, isSuccess, status } = PostRequest(
    "todos",
    null,
    { numberPhone },
    "hhhh",
    true
  );

  if (status === "success") router.push("/login/otp");

  console.log("fff===>", data, error, isPending, isSuccess, status);

  console.log("datas==>", numberPhone);

  return (
    <Stack width="100%" height="100%">
      <Box marginTop="120px" display="flex" justifyContent="center">
        <Paper
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Trakhine />
        </Paper>
      </Box>
      <Box marginTop="75px" display="flex" justifyContent="center">
        <Typography fontWeight="600" fontSize="17px">
          ورود / ثبت‌نام
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="25px">
        <Typography color="#717171" fontWeight="400" fontSize="15px">
          شماره تلفن خود را وارد کنید.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="30px">
        <TextField
          type="number"
          placeholder="شماره همراه"
          sx={{
            width: "320px",
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              height: "5px",
            },
            "& .css-jgzlbx-MuiInputBase-root-MuiOutlinedInput-root": {
              borderRadius: "10px !important",
            },
          }}
          onChange={_changePhoneNumberHandler}
        />
      </Box>
      <Box marginTop="25px" display="flex" justifyContent="center">
        <Button
          disabled={numberPhone.length === 11 ? false : true}
          sx={{
            width: "320px",
            backgroundColor: numberPhone.length === 11 ? "#00ff" : "#3333",
            color: "#fff",
            "&:hover": {
              color: "#333 !important",
              backgroundColor: numberPhone.length === 11 ? "#00ffffff" : "",
            },
          }}
          onClick={() => PostData()}
        >
          ارسال کد
        </Button>
      </Box>
      <Stack></Stack>
    </Stack>
  );
};

export default Login;
