"use client";

import { ButtonBase } from "@/components/custom";
import { Stack } from "@mui/material";

const LoginForm = () => {
  return (
    <Stack width="100%" height="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <ButtonBase
        lable="ارسال اطلاعات"
        type="submit"
        customSX={{
          backgroundColor: "blue",
          color: "#fff",
          "&:hover": {
            backgroundColor: "blue",
          },
          width: "150px",
          borderRadius: "15px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "700",
        }}
        onClick={() => console.log("click")}
        variant="contained"
      />
    </Stack>
  );
};

export default LoginForm;
