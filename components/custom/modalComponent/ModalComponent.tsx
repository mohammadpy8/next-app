import { Box, Stack, Dialog } from "@mui/material";
import type { Dispatch, FC, SetStateAction } from "react";
import React from "react";

type modalType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};

const ModalComponent: FC<modalType> = ({ setShowModal, showModal, children }) => {
  console.log("showModal==>", showModal);

  return (
    <React.Fragment>
      <Dialog
        open={showModal}
        onClose={() => setShowModal(!showModal)}
        sx={{
          "& .MuiDialog-paperScrollPaper": {
            transform: showModal ? "translateY(0px)" : "translateY(-1500px)",
            transition: "all 0.5s ease-in-out",
          },
          "& .MuiDialog-container": {
            transform: showModal ? "translateY(0px)" : "translateY(-1500px)",
            transition: "all 0.5s ease-in-out",
          },
        }}
      >
        {children}
      </Dialog>
    </React.Fragment>
  );
};

export { ModalComponent };
