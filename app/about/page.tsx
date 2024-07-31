"use client";

import { Box } from "@mui/material";
import axios from "axios";
import { cookies } from "next/headers";
import { useEffect } from "react";
import { fetchAccess } from "./action";
const About = () => {
  // const cookieFile = cookies();
  // cookieFile.set("name", "alireza", { secure: true });

  // console.log("cc------------------>", cookieFile.get("name"));

  useEffect(() => {
    fetchAccess();
  }, []);

  return <Box></Box>;
};

export default About;
