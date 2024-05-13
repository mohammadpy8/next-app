"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
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
      {/* <Input placeholderInput="NAME" onChangeInput={() => changeHander} /> */}
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Box width="450px" height="300px" bgcolor="red">
          <Typography>nxdkjhfdivn </Typography>
          <Button
            onClick={() => setShowModal(!showModal)}
            sx={{
              backgroundColor: "#00ff",
              color: "#fff",
              textTransform: "initial",
              "&:hover": {
                backgroundColor: "#00ff",
              },
            }}
          >
            close modal
          </Button>
        </Box>
      </ModalComponent>
      <Button onClick={() => setShowModal(!showModal)}>show modal</Button>
    </Box>
  );
};

export default HomePage;
