"use client";

import { Box, Stack, TextField, Grid, styled } from "@mui/material";
import { StyledFormat } from "@/utils";
import type { FC } from "react";

type InputProps = {
  placeholderInput: string;
  onChangeInput?: () => any;
  sxInputCustom?: any;
  sxParentInput?: any;
};

const InputComponent = styled(TextField)(() => ({
  "& .MuiFormControl-root": {
    color: (props: any) => console.log("any===>", props),
    position: "relative",
    backgroundColor: "#fff",
  },
  "& .MuiInputBase-root": { backgroundColor: "#fff", width: "250px" },
  "& .MuiInputBase-formControl": {
    borderRadius: "1.25rem",
    outline: "none !important",
    " & fieldset": {
      border: "3px solid #333e",
    },
  },
  "&  .Mui-focused": {
    outline: "none !important",
  },
  "  & .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
    border: "4px solid red",
  },
  "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ": {
    color: "red",
    display: "flex",
    justifyContent: "start",
    position: "absolute",
    right: "-20px",
  },
  "& label": {
    position: "absolute",
    right: "30px",
    backgroundColor: "#fff",
    // display: "flex",
    // justifyContent: "center",
  },
  "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
    "& :focus": {
      position: "absolute",
      right: "20px",
    },
  },
}));

const Input: FC<InputProps> = ({
  placeholderInput = "placeholder",
  onChangeInput = () => {},
  sxInputCustom,
  sxParentInput,
}) => {
  const { _styles, _theme } = StyledFormat();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        xl={2}
        sx={{
          width: (theme: any) => {
            console.log("any-them ====>", theme);
            return "100vw";
          },
        }}
      >
        <Box width="100%" margin="25px" sx={sxParentInput}>
          <InputComponent label={placeholderInput ?? "نام و نام خانوادگی"} onChange={onChangeInput} sx={sxInputCustom} />
        </Box>
      </Grid>
    </Grid>
  );
};

export { Input };
