"use client";

import { Box, Step, Stepper, StepLabel, Button } from "@mui/material";
import React, { type ReactNode, useState, type FC, ReactElement } from "react";
import { StepIconProps } from "@mui/material/StepIcon";
import { ColorlibStepIconRoot, ColorlibConnector } from "./StepperModel.styled";
import { IoSettingsOutline, IoAddCircleOutline, IoVideocam } from "react-icons/io5";

type IStepData = Array<{
  id: number;
  Component: ReactNode;
}>;

type TStepIcons = Array<{
  id: string;
  icon: ReactElement;
}>;

type TStepperModel = {
  stepLabel: string[];
  stepData: IStepData;
  errorData: any;
  stepIcons: TStepIcons;
};

const StepperModel: FC<TStepperModel> = ({ stepLabel, stepData, errorData, stepIcons }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [stepIconss, setStepIcons] = useState<TStepIcons>([]);
  const icons = stepIcons.map((item, index) => ({
    [index + 1]: item.icon,
  }));

  const convertIcons = () => {
    for (let i = 0; i <= stepIcons.length; i++) {
      
    }
  };

  console.log("j", convertIcons());

  console.log("iitem==>", icons);

  const handleNextStep = () => setActiveStep((prevStep) => prevStep + 1);

  const handleBackStep = () => setActiveStep((prevStep) => prevStep - 1);

  const convertIconsStep = (iconsList: TStepIcons) => {
    const listIcons = iconsList.map(({ id, icon }) => ({
      [id]: icon,
    }));
    return listIcons;
  };

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    // const icons: { [index: string]: React.ReactElement } = convertIconsStep(stepIcons);
    const icons = stepIcons.map((item, index) => ({
      [index + 1]: item.icon,
    }));

    console.log("ite===>", icons);
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {/* {icons[String(props.icon)]} */}
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
