import { TextField, styled } from "@mui/material";

export const InputModelComponent = styled(TextField)(() => ({
  "&.text-filed-model-error": {
    "& fieldset": {
      border: "3px solid red !important",
      borderRadius: "15px",
      backgroundColor: "#ebebeb",
      zIndex: 0,
      boxShadow: "1px 1px 9px 0px red",
    },
    "& label": {
      color: "red",
      fontWeight: "bold",
    },
    "& input": {
      zIndex: 10,
      color: "#a8a8a8",
      fontWeight: "bold",
    },
  },
  "&.text-filed-model-warning": {
    "& fieldset": {
      backgroundColor: "#ebebeb",
      border: "3px solid #eebe00 !important",
      borderRadius: "15px",
      zIndex: 0,
      boxShadow: "1px 1px 9px 0px #f3cc2e",
    },
    "& label": {
      color: "#eebe00",
      fontWeight: "bold",
    },
    "& input": {
      zIndex: 10,
      color: "#a8a8a8",
      fontWeight: "bold",
    },
  },
  "&.text-filed-model-normal": {
    "& fieldset": {
      border: "3px solid #c8c8c8 !important",
      borderRadius: "15px",
      backgroundColor: "#ebebeb",
      boxShadow: "1px 1px 9px 0px #ebebeb",
    },
    "& label": {
      color: "#c8c8c8",
      fontWeight: "bold",
    },
    "& input": {
      zIndex: 10,
      color: "#a8a8a8",
      fontWeight: "bold",
    },
  },
}));
