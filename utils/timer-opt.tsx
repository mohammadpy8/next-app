"use client";

import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import type { FC } from "react";

type propsTimerOtp = Readonly<{
  time: number;
}>;

const TimerOtp: FC<propsTimerOtp> = ({ time, ...restProps }) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

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

  return <Stack></Stack>;
};

export { TimerOtp };
