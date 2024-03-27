"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { sliderData } from "./data";
import { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type sliderDataType = {
  id?: number;
  name?: "111111" | "222222" | "333333" | "444444" | "555555" | string;
};

const SliderComponent = () => {
  const [data] = useState<sliderDataType[]>(sliderData);
  const [valueSlider, setValueSlider] = useState<number>(1);
  console.log("value--->", valueSlider);

  const nextClickHandle = () => {
    if (valueSlider === data.length) {
      setValueSlider(1);
    } else {
      setValueSlider((value) => value + 1);
    }
  };
  const prevClickHandle = () => {
    if (valueSlider === 1) {
      setValueSlider(data.length);
    } else {
      setValueSlider((value) => value - 1);
    }
  };

  const viewSlider = () => {
    const findId = data.find((s) => s.id === valueSlider);
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        mt={2}
        sx={{ backgroundColor: "red" }}
        width={465}
        height={220}
        borderRadius={5}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {findId?.name}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "500px",
        height: "250px",
        border: "3px solid red",
        margin: "20px",
        borderRadius: "15px",
      }}
      display={"flex"}
      justifyContent={"center"}
      onClick={viewSlider}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p={1}
      >
        <IconButton
          color="primary"
          sx={{ width: "50px", height: "50px", border: "3px solid" }}
          onClick={nextClickHandle}
        >
          <IoIosArrowBack size={30} />
        </IconButton>
      </Box>
      {viewSlider()}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p={1}
      >
        <IconButton
          color="primary"
          sx={{ width: "50px", height: "50px", border: "3px solid" }}
          onClick={prevClickHandle}
        >
          <IoIosArrowForward size={30} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SliderComponent;
