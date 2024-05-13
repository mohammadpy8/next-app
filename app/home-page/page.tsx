"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { Input, ModalComponent } from "@/components/custom";
import { useState, type ChangeEvent } from "react";

type TextFieldType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const HomePage = () => {
  const changeHander = ({ target }: TextFieldType) => {
    return target.value;
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  // console.log("showModal", showModal);

  // console.log("ggggg")

  return (
    // <Stack>
    <Box>
      {/* <Input placeholderInput="NAME" onChangeInput={() => changeHander} /> */}
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Typography>nxdkjhfdivn </Typography>
      </ModalComponent>
      <Button onClick={() => setShowModal(!showModal)}>show modal</Button>
    </Box>
    // </Stack>
  );
};

export default HomePage;
