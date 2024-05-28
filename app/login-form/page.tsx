"use client";

import { ButtonBase, ButtonWithIcon, InputModel, ButtomModel, LabelModel } from "@/components/custom";
import { Box, Stack } from "@mui/material";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";

const LoginForm = () => {
  const [loadingMode, setLoadingMode] = useState<boolean>(false);

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
      <Box mt="25px">
        <InputModel
          model="iconModel"
          label="نام و نام خانوادگی"
          status="normal"
          iconInput={<HiOutlineUserPlus color="#a8a8a8" size={25} />}
          width="400px"
          height="60px"
          positionIcon="end"
        />
      </Box>
      <Box mt="25px">
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
      </Box>
      <Box mt="25px">
        <InputModel
          model="iconModel"
          label="شماره تلفن"
          status="normal"
          iconInput={<MdOutlinePhonelinkRing color="#a8a8a8" size={25} />}
          width="400px"
          height="60px"
          positionIcon="end"
        />
      </Box>
      <Box mt="25px">
        <InputModel
          model="iconModel"
          label="آدرس محل سکونت"
          status="normal"
          iconInput={<GrLocation color="#a8a8a8" size={25} />}
          width="400px"
          height="60px"
          positionIcon="end"
        />
      </Box>
      <Box mt="25px">
        <ButtomModel
          model={loadingMode ? "loading" : "fill"}
          lable=" در حال ارسال"
          onClick={() => setLoadingMode(!loadingMode)}
        />
      </Box>
      <Box mt="25px">
        <LabelModel model="subOne" label="این متن است"/>
      </Box>
    </Stack>
  );
};

export default LoginForm;
