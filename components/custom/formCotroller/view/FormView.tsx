import { Box, Typography } from "@mui/material";
import { FormController, FormStepperController } from "@/components/custom";

export interface singlePageDataProps {
  page_1: {
    id: number;
    type: "INPUT" | "TEXTAREA" | "SWITCH" | "RADIOBUTTON" | "COMBOBOX";
    placeholder: string;
    label: string;
    valid: boolean;
  }[];
}

type PropsFormView = {
  singlePageData?: singlePageDataProps;
  validationForm: any;
  headerTitle: string;
  buttonData: any;
};

const FormView = ({
  singlePageData,
  validationForm,
  headerTitle,
  buttonData,
  ...restProps
}: PropsFormView) => {
  const sizeDataFrom = Object.keys(singlePageData ?? {}).length;
  const _formControllers = () => {
    if (sizeDataFrom && sizeDataFrom === 1) {
      return (
        <FormController
          {...restProps}
          validationForm={validationForm}
          dataForm={singlePageData}
          buttonData={buttonData}
        />
      );
    } else if (sizeDataFrom && sizeDataFrom > 1) {
      return <FormStepperController {...restProps} validationForm={validationForm} />;
    } else {
      throw new Error("Invalid FormController");
    }
  };
  return (
    <Box width={"100%"} height={"100%"} bgcolor={"#00ffff"}>
      {headerTitle && headerTitle.length > 0 && (
        <Box display={"flex"} justifyContent={"center"}>
          <Typography variant="h4">{headerTitle}</Typography>
        </Box>
      )}
      <Box> {_formControllers()}</Box>
    </Box>
  );
};

export { FormView };
