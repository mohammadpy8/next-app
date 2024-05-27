import { TextField, styled, useTheme, InputAdornment } from "@mui/material";

const InputModelComponent = styled(TextField)((theme) => {
  const { palette } = useTheme();
  const { width, height } = theme as any;
  return {
    "& .MuiInputBase-root": {
      width,
      height,
    },
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
        color: palette.inputColor.second,
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
  };
});

const InputAdormentCustom = styled(InputAdornment)(() => {
  const { palette } = useTheme();
  return {
    color: palette.inputColor.second + "!important",
    zIndex: 10,
    "& p": {
      color: palette.inputColor.second,
      zIndex: 10,
    },
  };
});

export { InputModelComponent, InputAdormentCustom };
