"use client";

import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

type dataType = Array<{
  id: number;
  name: string;
}>;

const data: dataType = [
  { id: 1, name: "11" },
  { id: 2, name: "22" },
  { id: 3, name: "33" },
  { id: 4, name: "44" },
  { id: 5, name: "55" },
];

const CustomSlider = () => {
  const [dataSlider] = useState<dataType>(data);
  const [dotValue, setDotValue] = useState<number>(dataSlider?.length);
  const [activeDot, setActiveDot] = useState<number>(1);

  console.log("active====>", activeDot);

  const sliderChangeValue = (type: "prev" | "next") => {
    switch (type) {
      case "next":
        if (activeDot === dataSlider.length) {
          setActiveDot(1);
        } else {
          setActiveDot((value) => value + 1);
        }
      case "prev":
        if (activeDot === 1) {
          setActiveDot(data.length);
        } else {
          setActiveDot((value) => value - 1);
        }
    }
  };

  return (
    <Stack width="500px" height="400px">
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
        <Box
          bgcolor="#eeee"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box bgcolor="green" width="350px" height="250px" borderRadius="15px">
            <Button
              sx={{
                color: "#fff",
              }}
              onClick={() => sliderChangeValue("next")}
            >
              next
            </Button>
            <Button
              sx={{
                color: "#fff",
              }}
              onClick={() => sliderChangeValue("prev")}
            >
              perv
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default CustomSlider;
