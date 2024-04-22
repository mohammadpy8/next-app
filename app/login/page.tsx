"use client";

import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { type ChangeEvent, useState, type FC, type MouseEvent } from "react";
import Trakhine from "./tarkhine";
import { ApiRegister } from "@/config";
import { useRouter } from "next/navigation";
import { ToastComponent } from "@/components/custom";
import OtpInput from "react-otp-input";

type TextFieldType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Login: FC = () => {
  const router = useRouter();

  const [numberPhone, setNumberPhone] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [otpValue, setOtpValue] = useState<string>("");

  const { PostRequest } = ApiRegister();
  const _changePhoneNumberHandler = (event: TextFieldType) => {
    setNumberPhone(event.target.value);
  };

  const { PostData, data, error, isPending, isSuccess, status } = PostRequest(
    "users",
    null,
    { numberPhone },
    "hhhhhhhhhh",
    true
  );

  const _viewLoginPage = () => {
    if (step === 0) {
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
              onClick={() =>
                PostData({} as unknown as void, {
                  onSuccess: () => {
                    setStep(1);
                    ToastComponent("SUCCESS", "کد ارسال شد", 2500);
                  },
                })
              }
            >
              ارسال کد
            </Button>
          </Box>
          <Stack></Stack>
        </Stack>
      );
    }
    if (step === 1) {
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
          <Box marginTop="50px" display="flex" justifyContent="center">
            <Typography fontSize="17px" fontWeight="600">
              کد تایید
            </Typography>
          </Box>
          <Box marginTop="25px" display="flex" justifyContent="center">
            <Typography fontSize="15px" fontWeight="400" color="#717171">
              کد تایید 5 رقمی به شماره {numberPhone} ارسال شد
            </Typography>
          </Box>
          <Stack marginTop="25px">
            <Box display="flex" justifyContent="center">
              <OtpInput
                value={otpValue}
                onChange={setOtpValue}
                numInputs={5}
                renderInput={(props) => <input {...props} />}
                containerStyle={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
                inputStyle={{
                  width: "50px",
                  height: "40px",
                  margin: "10px",
                  borderRadius: "10px",
                  border: "1px solid #717171",
                }}
              />
            </Box>
          </Stack>
        </Stack>
      );
    } else {
      return ToastComponent("ERROR", "خطا در دریافت اطلاعات", 2500);
    }
  };

  return <Box>{_viewLoginPage()}</Box>;
};

export default Login;
