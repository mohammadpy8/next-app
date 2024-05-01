"use client";

import {
  FormView,
  ImageComponent,
  LoaderComponent,
  type singlePageDataProps,
} from "@/components/custom";
import { ApiRegister } from "@/config";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import data_form from "./data-form.json";
import dynamic from "next/dynamic";
import { ButtonComponent } from "@/components/custom";

const NewPage = dynamic(() => import("./new"), {
  loading: () => (
    <Typography fontSize="12px" fontWeight="500">
      loading
    </Typography>
  ),
});

const Main = () => {
  const listEndPoint = [
    { name: "todos", endPoint: "todoss" },
    { name: "posts", endPoint: "posts" },
    { name: "users", endPoint: "users" },
  ];

  const {
    GetRequest,
    PostRequest,
    AllGetRequest,
    AxiosMethod: { GET, POST, DELETE, PATCH, PUT },
  } = ApiRegister();

  useEffect(() => {
    const ff = async () => {
      const ddd = await AllGetRequest(listEndPoint);
    };
    ff();
  }, []);

  const rest = { input: { inpurt: "input" }, switch: { switch: "switch" } };

  const convertRest = (typeData: string) => {
    return rest.input;
  };

  console.log(convertRest("input"));

  return (
    <div>
      <Box width={"100%"}>
        <FormView
          singlePageData={data_form as singlePageDataProps}
          validationForm={null}
          headerTitle="ثبت نام"
          buttonData={{
            title: "بررسی",
            color: "primary",
            sx: {},
            sxParent: {
              display: "flex",
              justifyContent: "center",
            },
            type: "contained",
          }}
          {...rest}
        />
        <ImageComponent
          altImage="flower"
          heigthImage={50}
          widthImage={50}
          urlImage="flowers.jpg"
          styleImage={{
            borderRadius: "50px",
          }}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box bgcolor="#000" width="90%" borderRadius="15px">
          <LoaderComponent
            colorLoader="#fff"
            heigthLoader="60"
            widthLoader="60"
            radiusLoader="9"
            wrapperStyleLoader={{}}
          />
        </Box>
        <ButtonComponent buttonData={{}} onClickHandler={() => {}}/>
      </Box>
    </div>
  );
};

export default Main;
