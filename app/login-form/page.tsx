"use client";

import {
  ButtonBase,
  ButtonWithIcon,
  InputModel,
  ButtomModel,
  LabelModel,
  StepperModel,
  StepperFrom,
} from "@/components/custom";
import { Box, Stack, Typography } from "@mui/material";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { IoSettingsOutline, IoAddCircleOutline, IoVideocam } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const [loadingMode, setLoadingMode] = useState<boolean>(false);

  const stepOne = () => {
    return <Typography>one</Typography>;
  };

  const stepTwo = () => {
    return <Typography>two</Typography>;
  };

  const stepThree = () => {
    return <Typography>three</Typography>;
  };

  const steps = ["name", "lastName", "firstname"];
  const dataStep = [
    { id: 0, Component: stepOne() },
    { id: 1, Component: stepTwo() },
    { id: 2, Component: stepThree() },
  ];

  const stepIcons = [
    { id: 1, icon: <IoSettingsOutline /> },
    { id: 2, icon: <IoAddCircleOutline /> },
    { id: 3, icon: <IoVideocam /> },
  ];

  const FormValidation: z.infer<ZodType> = z.object({
    email: z
      .string({ message: "فرمت را وارد کنید" })
      .email({ message: "فرمت ایمیل نادرست می باشد" })
      .min(10, { message: "حداقل کاراکتر باید 10 کلمه باشد" })
      .max(25, { message: "حداکثر ایمیل باید 25 کلمه باید باشد" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormValidation) });

  console.log("error ====>", errors);

  return (
    <Stack
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginTop="25px"
    >
      <ButtonBase
        lable="ارسال اطلاعات"
        type="submit"
        onClick={() => console.log("click")}
        variant="contained"
        size="large"
        disableMode={false}
      />
      {/* <ButtonWithIcon
        lable="با ایکون"
        type="button"
        onClick={() => {}}
        variant="contained"
        size="extraLarge"
        disableMode={false}
        endIcon={<IoSend />}
      /> */}
      {/* <Box mt="25px">
        <InputModel
          model="iconModel"
          label="نام و نام خانوادگی"
          status="normal"
          iconInput={<HiOutlineUserPlus color="#a8a8a8" size={25} />}
          width="400px"
          height="60px"
          positionIcon="end"
        />
      </Box> */}
      {/* <Box mt="25px">
        <InputModel
          model="iconModel"
          label="کد ملی"
          status="normal"
          iconInput={<CiCreditCard1 color="#a8a8a8" size={25} />}
          width="400px"
          height="60px"
          positionIcon="end"
          onChange={(e) => {
            console.log("onChange InputModel", e.target.value);
          }}
        />
      </Box> */}
      {/* <Box mt="25px">
        <InputModel
          model="iconModel"
          label="شماره تلفن"
          status="normal"
          iconInput={<MdOutlinePhonelinkRing color="#a8a8a8" size={25} />}
          width="400px"
          height="60px"
          positionIcon="end"
        />
      </Box> */}
      <Box mt="25px">
        <form onSubmit={handleSubmit((data) => console.log("data log ==>", data))}>
          <InputModel
            model="iconModel"
            label="آدرس محل سکونت"
            status={errors.email && "error"}
            iconInput={<GrLocation color="#a8a8a8" size={25} />}
            width="400px"
            height="60px"
            positionIcon="end"
            registerInput={register}
            name="email"
          />
          <ButtomModel
            model={loadingMode ? "loading" : "fill"}
            lable=" در حال ارسال"
            // onClick={() => setLoadingMode(!loadingMode)}
            type="submit"
          />
          <button type="submit">send</button>
        </form>
      </Box>
      <Box mt="25px">
        <LabelModel model="subOne" label="این متن است" />
      </Box>
      <Box mt="50px">
        <StepperModel stepLabel={steps} stepData={dataStep} errorData={1} stepIcons={stepIcons} />
      </Box>
      <Box mt="25px" width="350px">
        <StepperFrom />
      </Box>
    </Stack>
  );
};

export default LoginForm;
