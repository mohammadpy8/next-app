"use client";

import { Box, Button, styled, TextField } from "@mui/material";
import { ApiRegister } from "@/config";

const FormBody = styled("form")(() => ({}));

const PostData = async (formData: FormData) => {
  const { PostRequest } = ApiRegister();

  ("use server");

  const dataSending = {
    id: formData.get("id"),
    name: formData.get("name"),
  };
  const { PostData } = PostRequest("users", null, dataSending, "users-data", true);
  return PostData();
};

const Form = () => {
  return (
    <FormBody action={PostData}>
      <TextField placeholder="id" name="id" />
      <TextField placeholder="name" name="name" />
      <Button type="submit">send</Button>
    </FormBody>
  );
};

export default Form;
