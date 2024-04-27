"use client";

import { ImageComponent } from "@/components/custom";
import { Box, Button, Typography } from "@mui/material";
// import Shop from "@/app/a/shop";
import Resalat from "@/app/a/Resalat";

const BottomNavigation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 7px 19px 0px rgba(22, 22, 22, 0.36)",
        borderRadius: "20px",
        width: { xs: "320px", sm: "330px" },
      }}
      position={"fixed"}
      bottom={20}
      mx={4}
      height={"80px"}
    >
      <Box display={"flex"} justifyContent={"space-between"} marginX={"1.7rem"} marginTop={"10px"}>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={"5px"}
        >
          <Box
            bgcolor={"#FCB6B6"}
            width={"40px"}
            height={"40px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="2" urlImage="2.png" widthImage={21} heigthImage={29} />
          </Box>
          <Box textAlign={"center"}>
            <Typography fontWeight={"600"} fontSize={"10px"} color={"#3A3861"}>
              انتخاب شهر
            </Typography>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={"5px"}
        >
          <Box
            bgcolor={"#BAF5F3"}
            width={"40px"}
            height={"40px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Shop />
          </Box>
          <Box>
            <Typography fontWeight={"600"} fontSize={"10px"} color={"#3A3861"}>
              خرید از سات
            </Typography>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={"5px"}
        >
          <Box
            bgcolor={"#C5E3FF"}
            width={"40px"}
            height={"40px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Resalat />
          </Box>
          <Box>
            <Typography fontWeight={"600"} fontSize={"10px"} color={"#3A3861"}>
              ام رسالت
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { BottomNavigation };
