"use client";

import { DevTool } from "@hookform/devtools";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/validation";
import chalk from "chalk";

const Manage = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    // resolver: yupResolver(registerSchema)
  });

  console.log("errors", errors, isValid, getValues);
  console.log(chalk.blue("Hello world!"));

  const formSubmitting = (data: any) => {
    console.log("data=>", data);
    reset();
  };

  return (
    <Box display="flex" flexDirection="column" gap={10} padding={10}>
      <DevTool control={control} placement="top-left" />
      <form onSubmit={handleSubmit(formSubmitting)}>
        <input
          type="text"
          placeholder="name.."
          {...register("name", {
            required: "وارد کردن اسم الزامی است",
            minLength: {
              value: 3,
              message: "باید 3 کاراکتر حداقل باشد",
            },
            maxLength: {
              value: 10,
              message: "باید 10 کاراکتر حداکثر باشد",
            },
          })}
        />
        <input
          type="email"
          placeholder="email.."
          {...register("email", {
            required: "وارد کردن ایمیل الزامی است",
            minLength: {
              value: 10,
              message: "باید 10 کاراکتر حداقل باشد",
            },
            maxLength: {
              value: 30,
              message: "باید 30 کاراکتر حداکثر باشد",
            },
            pattern: {
              value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
              message: "فرمت ایمیل نامعتبر است",
            },
            // validate: (value) => {
            //   console.log("valuee", value);
            //   return "";
            // },
          })}
        />
        <button type="submit">register</button>
      </form>
    </Box>
  );
};

export default Manage;
