import { Box, Stack } from "@mui/material";
import type { FC } from "react";
import React from "react";

type modalType = {
  showModal: boolean;
  setShowModal?: (value: boolean) => boolean;
};

const ModalComponent: FC<modalType> = ({ setShowModal, showModal }) => {
  console.log("showModal==>", showModal);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#dfdfdf",
        opacity: showModal ? 1 : 0,
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Box
        width="450px"
        height="350px"
        bgcolor="red"
        borderRadius="25px"
        sx={{
          transform: showModal ? "translateY(0px)" : "translateY(-1500px)",
          transition: "all 0.4s ease-in-out",
        }}
      ></Box>
    </Box>
  );
};

export { ModalComponent };
