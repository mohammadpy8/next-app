"use client";

import { registerSchema } from "@/validation";
import { Box, Typography } from "@mui/material";
import { useState, type FormEvent } from "react";

const Register = () => {
  const [errors, setErrors] = useState<any>({});

  const _handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      name: (event.target as any)[0].value,
      email: (event.target as any)[1].value,
    };

    try {
      const isValid = await registerSchema.isValid(newUser);
      const errorValidation = await registerSchema.validate(newUser, {
        abortEarly: false,
      });
      console.log("isValid", isValid, errorValidation);
    } catch (error: any) {
      let errors = error?.inner.reduce(
        (acc: any, err: any) => ({
          ...acc,
          [err.path]: err?.message,
        }),
        {}
      );
      console.log("errors", errors);
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={_handleSubmit}>
      <Box display="flex" flexDirection="column" gap={10} padding={10}>
        <input type="text" placeholder="name.." name="name" />
        {errors.name && (
          <Typography variant="h5" color={"red"}>
            {errors.name}
          </Typography>
        )}
        <input type="email" placeholder="email.." name="email" />
        {errors.email && (
          <Typography variant="h5" color={"red"}>
            {errors.email}
          </Typography>
        )}
        <button type="submit">register</button>
      </Box>
    </form>
  );
};

export default Register;
