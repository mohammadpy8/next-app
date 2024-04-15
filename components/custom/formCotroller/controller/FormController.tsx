import {
  Input,
  ComboBox,
  RadioButton,
  Switch,
  TextErea,
  type singlePageDataProps,
  ButtonComponent,
} from "@/components/custom";
import { Box } from "@mui/material";

type PropsFormView = {
  dataForm?: singlePageDataProps;
  validationForm: any;
  buttonData: any;
};

type allData = {
  id: number;
  type: "INPUT" | "TEXTAREA" | "SWITCH" | "RADIOBUTTON" | "COMBOBOX";
  placeholder: string;
  label: string;
  valid: boolean;
};

type typeFrom = "INPUT" | "TEXTAREA" | "SWITCH" | "RADIOBUTTON" | "COMBOBOX";

const FormController = ({ validationForm, dataForm, buttonData, ...restProps }: PropsFormView) => {
  const _showFormView = (typeForm: typeFrom, all_data: allData, id: number) => {
    const validationFilter = (name_validation: string) => {
      const typeValidation =
        validationForm?.filter((item: any) => item?.name === name_validation) ?? [];
      return typeValidation;
    };

    switch (typeForm) {
      case "INPUT":
        return <Input key={id} all_data={all_data} validation={validationFilter("input")} />;
      case "TEXTAREA":
        return <TextErea key={id} all_data={all_data} validation={validationFilter("texteara")} />;
      case "SWITCH":
        return <Switch key={id} all_data={all_data} validation={validationFilter("switch")} />;
      case "RADIOBUTTON":
        return (
          <RadioButton key={id} all_data={all_data} validation={validationFilter("radiobutton")} />
        );
      case "COMBOBOX":
        return <ComboBox key={id} all_data={all_data} validation={validationFilter("combobox")} />;
      default:
        throw new Error("Invalid type from");
    }
  };

  console.log("controller:==>", dataForm);
  const _viewForm = () => {
    return dataForm?.page_1?.map((data, index) => _showFormView(data?.type, data, index));
  };
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        margin: "10px 25px",
      }}
    >
      <Box width={"100%"} height={"100%"}>
        {_viewForm()}
      </Box>
      <Box>
        <ButtonComponent buttonData={buttonData} />
      </Box>
    </Box>
  );
};

export { FormController };
