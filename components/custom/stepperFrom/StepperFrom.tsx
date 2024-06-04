"use client";

import { Box, Button } from "@mui/material";
import { StepperView } from "@/components/custom";

import { useState, type FC } from "react";

type TStepperForm = {};

const data = ["name", "naaaa", "kaaaa", "ali"];

const StepperFrom: FC<TStepperForm> = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const nextStepHandler = () => setActiveStep((prevNextStep) => prevNextStep + 1);
  const backStepHandler = () => setActiveStep((prevBackStep) => prevBackStep - 1);

  return (
    <Box>
      <Box>
        <StepperView activeStep={activeStep} stepData={data} labelStep={true} />
      </Box>
      <Box>
        {activeStep >= 1 && <Button onClick={backStepHandler}>back</Button>}
        {activeStep + 1 < data.length && <Button onClick={nextStepHandler}>next</Button>}
      </Box>
    </Box>
  );
};

export { StepperFrom };
