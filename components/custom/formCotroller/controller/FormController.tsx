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
  const convertRestProps = () => {
    if (Object.keys(restProps).length === 0) return undefined;
    return {
      input: Object.values(restProps)[0] ?? {},
      switch: Object.values(restProps)[1] ?? {},
      combobox: Object.values(restProps)[2] ?? {},
      textarea: Object.values(restProps)[3] ?? {},
      radiobutton: Object.values(restProps)[4] ?? {},
    };
  };

  //@@ handle form by type-form and set validation

  const _showFormView = (typeForm: typeFrom, all_data: allData, id: number) => {
    const validationFilter = (name_validation: string) => {
      const typeValidation = validationForm?.filter((item: any) => item?.name === name_validation) ?? [];
      return typeValidation;
    };

    switch (typeForm) {
      case "INPUT":
        return (
          <Input
            key={id}
            all_data={all_data}
            validation={validationFilter("input")[0]}
            {...convertRestProps()?.input}
          />
        );
      case "TEXTAREA":
        return (
          <TextErea
            key={id}
            all_data={all_data}
            validation={validationFilter("texteara")[0]}
            {...convertRestProps()?.textarea}
          />
        );
      case "SWITCH":
        return (
          <Switch
            key={id}
            all_data={all_data}
            validation={validationFilter("switch")[0]}
            {...convertRestProps()?.switch}
          />
        );
      case "RADIOBUTTON":
        return (
          <RadioButton
            key={id}
            all_data={all_data}
            validation={validationFilter("radiobutton")[0]}
            {...convertRestProps()?.radiobutton}
          />
        );
      case "COMBOBOX":
        return (
          <ComboBox
            key={id}
            all_data={all_data}
            validation={validationFilter("combobox")[0]}
            {...convertRestProps()?.combobox}
          />
        );
      default:
        throw new Error("Invalid type from");
    }
  };

  console.log("controller:==>", dataForm);

  //todo show view form into any pages

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
