"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import type { FC } from "react";

type PropsTimerOtp = Readonly<{
  time: number;
}>;

const TimerOtp: FC<PropsTimerOtp> = ({ time, ...restProps }) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [otpValue, setOtpValue] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const sendOTP = (): void => {
    setMinutes(2);
    setSeconds(59);
  };
  const resendOTP = (): void => {
    setMinutes(2);
    setSeconds(59);
  };

  return (
    <Stack>
      <Box>
        <TextField placeholder="otp type" value={otpValue} onChange={({ target }) => setOtpValue(target.value)} />
        <Button onClick={sendOTP}>generate otp</Button>
        <Box>
          {seconds > 0 || minutes > 0 ? (
            <Typography>time reamaning : {minutes < 10 ? `0${minutes}` : minutes}</Typography>
          ) : (
            <Typography>didnot</Typography>
          )}
          <Button
            disabled={seconds > 0 || minutes > 0}
            onClick={resendOTP}
            sx={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
          >
            Resend Otp
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export { TimerOtp };
