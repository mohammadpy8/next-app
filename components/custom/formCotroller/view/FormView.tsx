import { FormController, FormStepperController } from "@/components/custom";

export interface FormDataItem {
  label?: string;
  valid?: boolean;
  type: "INPUT" | "SWITCH" | "RADIOBUTTON" | "TEXTEREA" | "COMBOBOX";
  placeholder?: string;
  dataForm?: any | null;
  customSx: null;
}

interface FormStteprDataItem {
  page: number;
  label?: string;
  valid?: boolean;
  type: "INPUT" | "SWITCH" | "RADIOBUTTON" | "TEXTEREA" | "COMBOBOX";
  placeholder?: string;
  dataForm?: any | null;
  customSx: null;
}

type FormViewType = {
  formData: Array<FormDataItem> | null;
  formStepperData: Array<Array<FormStteprDataItem>> | null;
  formType: "FORM" | "FORM-STEPPER";
  validationData: any;
  textBottomForm: boolean;
  textOnPage: number | null;
  childForm: boolean;
  buttonTextForm: string;
  dataChildForm:any
};

const FormView = (props: FormViewType) => {
  const {
    formType,
    validationData,
    formData,
    formStepperData,
    textBottomForm,
    textOnPage,
    childForm,
    buttonTextForm,
    dataChildForm
  } = props;
  switch (formType) {
    case "FORM":
      return (
        <FormController
          formData={formData}
          validationData={validationData}
          textBottomForm={textBottomForm}
          textOnPage={textOnPage}
          childForm={childForm}
          buttonTextForm={buttonTextForm}
          dataChildForm={dataChildForm}
        />
      );
    case "FORM-STEPPER":
      return (
        <FormStepperController
          formStepperData={formStepperData}
          validationData={validationData}
          textBottomForm={textBottomForm}
          textOnPage={textOnPage}
          childForm={childForm}
          buttonTextForm={buttonTextForm}
          dataChildForm={dataChildForm}
        />
      );
    default:
      throw new Error("Invalid Action");
  }
};

export { FormView };
