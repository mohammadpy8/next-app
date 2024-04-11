import { Box } from "@mui/material";
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
};

const FormView = ({
  singlePageData,
  validationForm,
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
        />
      );
    } else if (sizeDataFrom && sizeDataFrom > 1) {
      return (
        <FormStepperController {...restProps} validationForm={validationForm} />
      );
    } else {
      throw new Error("Invalid FormController");
    }
  };
  return (
    <Box width={"100%"} height={"100%"} bgcolor={"#333"} p={4}>
      {_formControllers()}
    </Box>
  );
};

export { FormView };
