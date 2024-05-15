"use client";

import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Input, ModalComponent } from "@/components/custom";
import { useState, type ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";

type TextFieldType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const HomePage = () => {
  const changeHander = ({ target }: TextFieldType) => {
    return target.value;
  };

  //@ state for show and close modal buttons

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Box>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Box width="500px" height="475px" bgcolor="#ffffff">
          <Box display="flex" justifyContent="end">
            <IconButton
              onClick={() => setShowModal(!showModal)}
              sx={{
                marginTop: "10px",
                "& button": {
                  marginLeft: "25px !important",
                },
              }}
            >
              <FaTimes color="#000" size={25} />
            </IconButton>
          </Box>
          <Box display="flex" justifyContent="center" mt="15px">
            <Typography fontWeight="600" fontSize="22px">
              ثبت نام
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
        </Box>
      </ModalComponent>
      <Button onClick={() => setShowModal(!showModal)}>show modal</Button>
    </Box>
  );
};

export default HomePage;
