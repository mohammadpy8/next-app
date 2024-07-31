"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const fetchAccess = async () => {
  const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
    email: "john@mail.com",
    password: "changeme",
  });
  if (res?.data) {
    cookies().set("access-token", res?.data?.access_token, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  }
  console.log("resposnedata====-------<>>>>", res.data);
};
