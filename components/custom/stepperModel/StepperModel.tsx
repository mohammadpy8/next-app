"use client";

import { Box, Step, Stepper, StepLabel, Button } from "@mui/material";
import React, { useState, type FC } from "react";
import { StepIconProps } from "@mui/material/StepIcon";
import { ColorlibStepIconRoot, ColorlibConnector } from "./StepperModel.styled";
import { TStepperModel } from "./StepperModel.type";

const StepperModel: FC<TStepperModel> = ({ stepLabel, stepData, errorData, stepIcons }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNextStep = () => setActiveStep((prevStep) => prevStep + 1);

  const handleBackStep = () => setActiveStep((prevStep) => prevStep - 1);

  const convertStepIcons = () => {
    const icons = stepIcons.reduce((acc: any, dataIcon: { id: number; icon: JSX.Element }) => {
      acc[dataIcon.id] = dataIcon.icon;
      return acc;
    }, {});
    return icons;
  };

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    const icons = convertStepIcons();
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon as number) as any] as any}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <Box width="100%">
      <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
        {stepLabel.map((label) => {
          return (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
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
            <Button onClick={handleNextStep}>{activeStep === stepLabel.length - 1 ? "Finish" : "Next"}</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export { StepperModel };
