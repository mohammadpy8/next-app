import { Dialog } from "@mui/material";
import type { Dispatch, FC, SetStateAction } from "react";
import React, { forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";

type modalType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ModalComponent: FC<modalType> = ({ setShowModal, showModal, children }) => {
  return (
    <React.Fragment>
      <Dialog
        open={showModal}
        onClose={() => setShowModal(!showModal)}
        keepMounted
        TransitionComponent={Transition}
        aria-description="modal"
        sx={{
          "& .MuiDialog-container": {
            transition: "transform 0.6s cubic-bezier(0, 0, 0.2, 1) 0.5ms !important",
          },
        }}
      >
        {children}
      </Dialog>
    </React.Fragment>
  );
};

export { ModalComponent };
