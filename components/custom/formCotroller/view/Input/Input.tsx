"use client";

import { Box, Stack, TextField, Grid, styled } from "@mui/material";
import { StyledFormat } from "@/utils";
import React, { useState, type FC } from "react";

type InputProps = {
  placeholderInput: string;
  onChangeInput?: () => any;
  sxInputCustom?: any;
  sxParentInput?: any;
};

const InputComponent = styled(TextField)(() => ({
  "& .MuiFormControl-root": {
    color: (props: any) => console.log("any===>", props),
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
  },
}));

const Input: FC<InputProps> = ({
  placeholderInput = "placeholder",
  onChangeInput = () => {},
  sxInputCustom,
  sxParentInput,
}) => {
  const { _styles, _theme } = StyledFormat();

  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <React.Fragment>
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
              console.log("any-them ==>", theme);
              return "100vw";
            },
          }}
        >
          <Box width="100%" margin="25px" sx={sxParentInput}>
            <InputComponent
              label={placeholderInput ?? "نام و نام خانوادگی"}
              onChange={onChangeInput}
              sx={sxInputCustom}
            />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Box
          width="350px"
          height="250px"
          bgcolor="#eee"
          borderRadius="15px"
          boxShadow={1}
          sx={{
            transform: showModal ? "translateY(0px)" : "translateY(-1500px)",
            transition: "all 0.5s ease-in-out",
          }}
          onClick={() => setShowModal(!showModal)}
        ></Box>
      </Box>
      <Box
        width="100vw"
        height="100vh"
        bgcolor="#333"
        sx={{
          display: showModal ? "block" : "none",
          opacity: showModal ? 1 : 0,
          transition: "all 1s ease-in-out",
        }}
      >
        hhh
      </Box>
    </React.Fragment>
  );
};

export { Input };
