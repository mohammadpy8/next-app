import {
  ComboBox,
  FormView,
  Input,
  RadioButton,
  Switch,
  TextErea,
} from "@/components/custom";
import { Box, FormControl, IconButton, Typography } from "@mui/material";

type FormDataItem = {
  label?: string;
  valid?: boolean;
  type: "INPUT" | "SWITCH" | "RADIOBUTTON" | "TEXTEREA" | "COMBOBOX";
  placeholder?: string;
  dataForm?: any | null;
  customSx: null;
};

interface FormControllerProps {
  formData: FormDataItem[] | null;
  validationData: any;
  textBottomForm: boolean;
  textOnPage: number | null;
  childForm: boolean;
  buttonTextForm: string;
  dataChildForm: any;
}

const FormController = (props: FormControllerProps) => {
  const {
    formData,
    validationData,
    textBottomForm,
    textOnPage,
    childForm,
    buttonTextForm,
    dataChildForm,
  } = props;

  const _TypeFormHandler = (dataForm: FormDataItem, key: number) => {
    switch (dataForm.type) {
      case "INPUT":
        return <Input {...dataForm} key={key} />;
      case "COMBOBOX":
        return <ComboBox {...dataForm} key={key} />;
      case "RADIOBUTTON":
        return <RadioButton {...dataForm} key={key} />;
      case "SWITCH":
        return <Switch {...dataForm} key={key} />;
      case "TEXTEREA":
        return <TextErea {...dataForm} key={key} />;
      default:
        throw new Error("Invalid Action");
    }
  };

  const _FormViewHandler = () => {
    return formData?.map((item: FormDataItem, index) =>
      _TypeFormHandler(item, index)
    );
  };

  return (
    <FormControl onSubmit={() => {}}>
      <Box>
        <Box>{_FormViewHandler()}</Box>
        <Box>
          <IconButton>
            <Typography variant="subtitle2">{buttonTextForm}</Typography>
          </IconButton>
        </Box>
        {textBottomForm && (
          <Box>
            <Typography>نام و نام خانوادگی</Typography>
          </Box>
        )}
        {childForm && (
          <Box>
            <FormView
              buttonTextForm="send"
              childForm={false}
              dataChildForm={null}
              formData={dataChildForm}
              formStepperData={null}
              formType="FORM"
              textBottomForm={false}
              textOnPage={null}
              validationData={2}
            />
          </Box>
        )}
      </Box>
    </FormControl>
  );
};

export { FormController };
