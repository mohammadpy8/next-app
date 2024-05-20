"use client";

import { Box, Button, TextField } from "@mui/material";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { z, type ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextFiled from "@/components/custom/formCotroller/view/TextFiled/TextFiled";
import { CSVReader, CSVSelector } from "@/components/module";
import { useUser } from "@/context";

const FormValidation: z.infer<ZodType> = z.object({
  email: z
    .string({ message: "فرمت را وارد کنید" })
    .email({ message: "فرمت ایمیل نادرست می باشد" })
    .min(10, { message: "حداقل کاراکتر باید 10 کلمه باشد" })
    .max(25, { message: "حداکثر ایمیل باید 25 کلمه باید باشد" }),
});

const ValidPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormValidation) });

  console.log("error==>", errors);

  const { _changeHandlerRenderClientData, setUser, user } = useUser();
  console.log("render===>", _changeHandlerRenderClientData, setUser, user);

  return (
    <Box>
      <form onSubmit={handleSubmit((d) => console.log("d==>", d))}>
        <TextFiled name="email" error={errors.email} registerInput={register} placeholder="email" id="1" label="email" />
        <Button type="submit">send</Button>
      </form>
      <CSVReader />
      <TextField
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) =>
          _changeHandlerRenderClientData(event ?? "", idx)
        }
      />
    </Box>
  );
};

export default ValidPage;
