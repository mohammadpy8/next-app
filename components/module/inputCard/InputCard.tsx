"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { type ChangeEvent, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";

type inputType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const InputCard = () => {
  const [inputs, setInputs] = useState<string[]>(Array(4).fill(""));
  console.log("inputs ====>", inputs);

  const _changeHandler = (index: number, event: inputType) => {
    const value = event.target.value;
    if (value.length <= 4) {
      const newInput = [...inputs];
      newInput[index] = value;
      setInputs(newInput);
      if (value.length === 4 && index < 3) {
        const nextIndex = index + 1;
        document.getElementById(`input-${nextIndex}`)?.focus();
      }
    }
  };

  const checkDisable = (inputsGroup: string[]): boolean => {
    const loopInputs = inputsGroup.map((item) => item.length === 4);
    const checkValid = loopInputs.every((item) => item === true);
    return checkValid;
  };

  return (
    <Stack margin="15px">
      <Box display="flex" justifyContent="space-between" gap="10px" flexDirection="row-reverse">
        {inputs?.map((input, index) => (
          <TextField
            key={index}
            id={`input-${index}`}
            type="number"
            value={input}
            onChange={(event) => _changeHandler(index, event)}
            inputProps={{ maxLength: 4 }}
            sx={{
              "& ::-webkit-outer-spin-button, & ::-webkit-inner-spin-button": {
                WebkitAppearance: "none !important",
                margin: 0,
                padding: 0,
              },
              "& .css-jgzlbx-MuiInputBase-root-MuiOutlinedInput-root": {
                borderRadius: "10px !important",
                width: "70px",
                height: "40px",
              },
              MozAppearance: "textfield",
            }}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" marginTop="25px">
        <Button
          disabled={checkDisable(inputs) === true ? false : true}
          sx={{
            backgroundColor: "#44ff",
            color: "#fff",
          }}
        >
          <Box
            display="flex"
            columnGap="10px"
            flexDirection="row-reverse"
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontSize="15px" fontWeight="500">
              بررسی شماره
            </Typography>
            <LuSendHorizonal />
          </Box>
        </Button>
      </Box>
    </Stack>
  );
};

export { InputCard };
