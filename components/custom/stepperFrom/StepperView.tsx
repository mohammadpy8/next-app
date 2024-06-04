import { Box } from "@mui/material";
import type { FC } from "react";
import { TiTick } from "react-icons/ti";

type TStepperView = {
  activeStep: number;
  stepData: string[];
  labelStep: boolean;
};

const StepperView: FC<TStepperView> = ({ activeStep, stepData, labelStep }) => {
  const lineStepper = Array(stepData.length - 1).fill("*");

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        {stepData.map((item, index) => (
          <Box
            key={index}
            width="50px"
            height="50px"
            bgcolor={activeStep === index || index < activeStep ? "red" : "gray"}
            borderRadius="50%"
            sx={{
              "&:not(:last-child)::after": {
                content: '""',
                display: "block",
                width: "100px",
                height: "7px",
                bgcolor: activeStep - 1 === index || index < activeStep ? "red" : "gray",
                marginTop: "20px",
                ml: "50px",
              },
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export { StepperView };
