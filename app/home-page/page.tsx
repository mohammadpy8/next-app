"use client";

import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Input, ModalComponent } from "@/components/custom";
import { useState, type ChangeEvent } from "react";
import React from "react";
import Collapse from "@mui/material/Collapse";
import { FaTimes } from "react-icons/fa";

type TextFieldType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const HomePage = () => {
  const changeHander = ({ target }: TextFieldType) => {
    return target.value;
  };

  //@ state for show and close modal buttons

  const [showModal, setShowModal] = useState<boolean>(false);
  const [stepForm, setStepForm] = useState<number>(0);

  const handleCollapseValue = (value: number) => {
    if (value === 0) {
      return false;
    } else {
      return true;
    }
  };

  const _renderForm = () => {
    if (stepForm === 0) {
      return (
        <Collapse in={handleCollapseValue(stepForm)} orientation="horizontal" collapsedSize={500}>
          <Box display="flex" justifyContent="center" mt="15px">
            <Typography fontWeight="600" fontSize="25px">
              ثبت نام | وارد شدن
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column" mt="20px" rowGap="15px" width="100%">
            <TextField
              label="نام"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                " & .rtl-mode-8rg6cs-MuiFormControl-root-MuiTextField-root , & .MuiInputBase-root": {
                  "&:hover": {
                    outline: "none !important",
                    border: "none !important",
                  },
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": {
                  border: "0.2rem solid #d9d9d9ee !important",
                  "& :focus": {
                    border: "2px solid red",
                  },
                },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <TextField
              label="نام خانوادگی"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": {
                  border: "0.2rem solid #d9d9d9ee !important",
                },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <TextField
              label="شماره تلفن"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": { border: "0.2rem solid #d9d9d9ee !important" },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <TextField
              label="نام پدر"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": { border: "0.2rem solid #d9d9d9ee !important" },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#4346ff",
                color: "#fff",
                width: "350px",
                height: "45px",
                borderRadius: "15px",
                fontWeight: "600",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "#6366fe",
                },
              }}
            >
              ارسال اطلاعات
            </Button>
          </Box>
          <Box>
            <Button onClick={() => setStepForm((value) => value + 1)}> برو بعدی</Button>
          </Box>
        </Collapse>
      );
    } else {
      return (
        <Collapse in={handleCollapseValue(stepForm)} orientation="horizontal" collapsedSize={500}>
          <Box display="flex" alignItems="center" flexDirection="column" mt="20px" rowGap="15px" width="100%">
            <TextField
              label="نام"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                " & .rtl-mode-8rg6cs-MuiFormControl-root-MuiTextField-root , & .MuiInputBase-root": {
                  "&:hover": {
                    outline: "none !important",
                    border: "none !important",
                  },
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": {
                  border: "0.2rem solid #d9d9d9ee !important",
                  "& :focus": {
                    border: "2px solid red",
                  },
                },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <TextField
              label="نام خانوادگی"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": {
                  border: "0.2rem solid #d9d9d9ee !important",
                },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <TextField
              label="نام پدر"
              onChange={changeHander}
              sx={{
                width: "350px",
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                },
                "& .MuiFormLabel-root": {
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  color: "#c2c2c2ed",
                },
                "& fieldset": { border: "0.2rem solid #d9d9d9ee !important" },
                "& .rtl-mode-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  color: "#1e7bd7",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#4346ff",
                color: "#fff",
                width: "350px",
                height: "45px",
                borderRadius: "15px",
                fontWeight: "600",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "#6366fe",
                },
              }}
            >
              ارسال اطلاعات
            </Button>
          </Box>
        </Collapse>
      );
    }
  };

  return (
    <Box>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} iconCloseTop={true}>
        <Box width="500px" height="450px" bgcolor="#ffffff">
          {_renderForm()}
        </Box>
      </ModalComponent>
      <Button onClick={() => setShowModal(!showModal)}>show modal</Button>
    </Box>
  );
};

export default HomePage;
