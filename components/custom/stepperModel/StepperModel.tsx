"use client";

import { Box, Step, Stepper, StepLabel, Button, Slide } from "@mui/material";
import React, { useState, type FC } from "react";
import { StepIconProps } from "@mui/material/StepIcon";
import { ColorlibStepIconRoot, ColorlibConnector } from "./StepperModel.styled";
import { TStepperModel } from "./StepperModel.type";

const StepperModel: FC<TStepperModel> = ({ stepLabel, stepData, errorData, stepIcons }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [collapse, setCollapse] = useState<boolean>(false);

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
    setCollapse((collapse) => !collapse);
  };

  const handleBackStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setCollapse((collapse) => !collapse);
  };

  const convertStepIcons = () => {
    const icons = stepIcons.reduce((acc: any, dataIcon: { id: number; icon: JSX.Element }) => {
      acc[dataIcon.id] = dataIcon.icon;
      return acc;
    }, {});
    return icons;
  };

  const ColorlibStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;
    const icons = convertStepIcons();
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon as number) as any] as any}
      </ColorlibStepIconRoot>
    );
  };

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
          {stepData && (
            <Slide direction="left" mountOnEnter unmountOnExit in={collapse}>
              <Box>{stepData[activeStep].Component}</Box>
            </Slide>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep >= 1 && (
              <Button color="inherit" onClick={handleBackStep} sx={{ mr: 1 }}>
                صفحه قبل
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep + 1 < stepLabel.length && <Button onClick={handleNextStep}>صفحه بعد</Button>}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export { StepperModel };
