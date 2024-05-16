"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Input, ModalComponent } from "@/components/custom";
import { useState, type ChangeEvent } from "react";

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
        <Box width="500px" height="420px" bgcolor="#ffffff">
          <Box display="flex" justifyContent="center" mt="15px">
            <Typography fontWeight="600" fontSize="18px">
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
              }}
            />
            <Button
              sx={{
                backgroundColor: "#4346ff",
                color: "#fff",
                width: "350px",
                height: "40px",
                borderRadius: "15px",
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
