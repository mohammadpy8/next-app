"use client";

import { Box, Step, Stepper, StepLabel, Button } from "@mui/material";
import React, { type ReactNode, useState, type FC } from "react";

type IStepData = Array<{
  id: number;
  Component: ReactNode;
}>;

type TStepperModel = {
  stepLabel: string[];
  stepData: IStepData;
  errorData: any;
};

const StepperModel: FC<TStepperModel> = ({ stepLabel, stepData, errorData }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNextStep = () => setActiveStep((prevStep) => prevStep + 1);

  const handleBackStep = () => setActiveStep((prevStep) => prevStep - 1);

  return (
    <Box width="100%">
      <Stepper activeStep={activeStep}>
        {stepLabel.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === stepLabel.length ? (
        ""
      ) : (
        <Box>
          {stepData && <Box>{stepData[activeStep].Component}</Box>}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep >= 1 && (
              <Button color="inherit" onClick={handleBackStep} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNextStep} disabled={errorData}>
              {activeStep === stepLabel.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export { StepperModel };
