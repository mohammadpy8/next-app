import { Stack, TextField, Typography } from "@mui/material";
import type { FC } from "react";
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

type TextFiledProps = {
  registerInput: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  name: string;
  errorForm: FieldErrors<FieldValues>;
  placeholder: string;
  label?: string;
  id?: string;
  type?: string;
};

const TextFiled: FC<TextFiledProps> = ({ registerInput, errorForm, name: nameError, placeholder, id, label, type, ...rest }) => {
  const errorMessage = errorForm?.[nameError]?.message as string;
  console.log("name=====>", nameError, errorForm, errorMessage);

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
      {errorMessage && <Typography color="red">{errorMessage}</Typography>}
    </Stack>
  );
};

export default TextFiled;
