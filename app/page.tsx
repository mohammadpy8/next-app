"use client";

import { ToastComponent } from "@/components/custom";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "134px",
          borderBottom: "1.5px solid #A2ABB5",
        }}
        bgcolor={"#fff"}
      >
        <Box>
          <Box component={Typography}>ام بازار</Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button variant="contained" onClick={() => ToastComponent("ERROR", "error", 2500)}>
            برگشتن نوتیف
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
