"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Stepper, type StepperChangeEvent } from "@progress/kendo-react-layout";
import { checkCircleIcon, xOutlineIcon } from "@progress/kendo-svg-icons";
import chalk from "chalk";

type dataType = Array<{
  id: number;
  name: string;
}>;

type dataList = {
  id: number;
  name: string;
};

interface stepsType {
  label: string;
  isValid: any;
}

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
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<Array<stepsType>>([
    {
      label: "Account Details",
      isValid: undefined,
    },
    {
      label: "Personal Details",
      isValid: undefined,
    },
    {
      label: "Delivery Details",
      isValid: undefined,
    },
    {
      label: "Payment Details",
      isValid: undefined,
    },
  ]);

  console.log(chalk.blue("active====>", activeDot));

  const sliderChangeValue = (type: "prev" | "next"): void => {
    switch (type) {
      case "next":
        return activeDot === dataSlider.length ? setActiveDot(1) : setActiveDot((value) => value + 1);
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
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
        <Typography>{searchSliderToShow?.name}</Typography>
      </Box>
    );
  };

  const _changeStepperHandler = (event: StepperChangeEvent): void => {
    const isValid = step % 2 === 0;
    const currentSteps = steps?.map((currentStep, index) => ({
      ...currentStep,
      isValid: index === step ? isValid : currentStep.isValid,
    }));
    setSteps(currentSteps);
    setStep(event?.value);
  };

  return (
    <Stack width="500px" height="100vh">
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
            <Box width="100%" height="100%" bgcolor="red" borderRadius="15px">
              {_showSliderView()}
            </Box>
            <Box display="flex" justifyContent="center" columnGap="15px" paddingY="15px">
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
          </Box>
        </Box>
      </Box>
      <Box
        marginTop="100px"
        width="500px"
        height="450px"
        bgcolor="#c9ccf7"
        display="flex"
        columnGap="25px"
      >
        <Stepper
          value={step}
          onChange={_changeStepperHandler}
          items={steps}
          mode="labels"
          successSVGIcon={checkCircleIcon}
          errorSVGIcon={xOutlineIcon}
        />
      </Box>
    </Stack>
  );
};

export default CustomSlider;
