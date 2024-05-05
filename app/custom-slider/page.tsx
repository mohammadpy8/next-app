"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

type dataType = Array<{
  id: number;
  name: string;
}>;

type dataList = {
  id: number;
  name: string;
};

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

  const sliderChangeValue = (type: "prev" | "next"): void => {
    switch (type) {
      case "next":
        return activeDot === dataSlider.length
          ? setActiveDot(1)
          : setActiveDot((value) => value + 1);
      case "prev":
        return activeDot === 1 ? setActiveDot(data.length) : setActiveDot((value) => value - 1);
    }
  };

  const convertDotSlider = (): Array<string> => {
    const dots = Array(dotValue).fill("*");
    return dots;
  };

  const _showSliderView = (): JSX.Element => {
    const searchSliderToShow = dataSlider.find((slider: dataList) => slider.id === activeDot);
    return (
      <Box>
        <Typography>{searchSliderToShow?.name}</Typography>
      </Box>
    );
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
            <Box display="flex" justifyContent="center" columnGap="15px">
              {convertDotSlider()?.map((_, index) => (
                <Box
                  key={index + 1}
                  width={index + 1 === activeDot ? "55px" : "25px"}
                  height="25px"
                  borderRadius={index + 1 === activeDot ? "25px" : "50%"}
                  onClick={() => setActiveDot(index + 1)}
                  sx={{
                    backgroundColor: index + 1 === activeDot ? "#fff" : "red",
                    cursor: "pointer",
                    transition: "all 0.35s ease-in-out",
                  }}
                ></Box>
              ))}
            </Box>
            <Box>{_showSliderView()}</Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default CustomSlider;
