import { Stack, TextField, Typography } from "@mui/material";
import type { FC } from "react";
import type {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

type TextFiledProps = {
  registerInput: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  name: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  placeholder: string;
  label?: string;
  id?: string;
  type?: string;
};

const TextFiled: FC<TextFiledProps> = ({ registerInput, error, name: nameError, placeholder, id, label, type, ...rest }) => {
  //   const errorMessage = errorForm?.[nameError]?.message as string;
  //   console.log("name=====>", nameError, errorForm, errorMessage);
  console.log("r==>", error);

  return (
    <Stack>
      <TextField
        {...registerInput(nameError)}
        placeholder={placeholder}
        id={id ?? "1"}
        type={type ?? "text"}
        label={label}
        {...rest}
      />
      {error && <Typography color="red">{error.message as string}</Typography>}
    </Stack>
  );
};

export default TextFiled;
