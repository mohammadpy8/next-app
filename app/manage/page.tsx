"use client";

import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

const Manage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const formSubmitting = (data: any) => {
    console.log("data=>", data);
  };

  return (
    <Box display="flex" flexDirection="column" gap={10} padding={10}>
      <form onSubmit={handleSubmit(formSubmitting)}>
        <input type="text" placeholder="name.." {...register("name")} />
        <input type="email" placeholder="email.." {...register("email")} />
        <button type="submit">register</button>
      </form>
    </Box>
  );
};

export default Manage;
