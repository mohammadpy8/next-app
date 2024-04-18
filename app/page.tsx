"use client";

import { ImageComponent, ToastComponent } from "@/components/custom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import type { FC } from "react";
import MBazar from "./a/mBazar";
import Imagem from "./a/Imagem";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

const Home: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "155px",
          borderBottom: "1.5px solid #A2ABB5",
        }}
        bgcolor={"#fff"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box marginTop={"23px"} marginRight={"16px"}>
            <MBazar />
          </Box>
          <Box marginTop={"16px"} marginLeft={"13px"}>
            <IconButton>
              <IoMenu color="#000" size="30px" />
            </IconButton>
          </Box>
        </Box>
        <Box display={"flex"} marginTop={"15px"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderBottom={"2px solid #3A3861"}
            paddingBottom={"16px"}
            width={"25%"}
          >
            <Box>
              <IconButton>
                <GoHomeFill color="#014E60" />
              </IconButton>
            </Box>
            <Box>
              <Typography fontWeight={500} fontSize={"13px"} sx={{ color: "#014E60" }}>
                خانه
              </Typography>
            </Box>
            <hr />
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"25%"}>
            <Box>
              <IconButton>
                <IoSearchOutline color="#A2ABB5" />
              </IconButton>
            </Box>
            <Box>
              <Typography fontWeight={500} fontSize={"13px"} color={"#A2ABB5"}>
                جستجو
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"25%"}>
            <Box>
              <IconButton>
                <BiCategory color="#A2ABB5" />
              </IconButton>
            </Box>
            <Box>
              <Typography fontWeight={500} fontSize={"13px"} color={"#A2ABB5"}>
                دسته بندی ها
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"25%"}>
            <Box>
              <IconButton>
                <HiOutlineShoppingCart color="#A2ABB5" />
              </IconButton>
            </Box>
            <Box>
              <Typography fontWeight={500} fontSize={"13px"} color={"#A2ABB5"}>
                سبد خرید
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop={"25px"} marginX={"1rem"} display={"flex"} justifyContent={"space-between"}>
        <Box
          width={"80px"}
          height={"47px"}
          bgcolor={"#fff"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"1rem"}
        >
          <Typography fontSize={"12px"}>ام بازار من</Typography>
        </Box>
        <Box
          width={"80px"}
          height={"47px"}
          bgcolor={"#fff"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"1rem"}
        >
          <Typography fontSize={"12px"}>بازار رسالت</Typography>
        </Box>
        <Box
          width={"80px"}
          height={"47px"}
          bgcolor={"#fff"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"1rem"}
        >
          <Typography fontSize={"12px"}>بازار MGC</Typography>
        </Box>
        <Box
          width={"57px"}
          height={"47px"}
          bgcolor={"#07BEB8"}
          color={"#fff"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"1rem"}
        >
          <Typography fontSize={"12px"}>بیشتر</Typography>
        </Box>
      </Box>
      <Box marginTop={"10px"} marginX={"1rem"}>
        <Imagem />
      </Box>
      <Box
        marginTop={"30px"}
        marginX={"1rem"}
        display={"flex"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        sx={{
          columnGap: "20px",
          rowGap: "20px",
        }}
      >
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#CEEEED"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImageComponent altImage="1" urlImage="1.png" widthImage={57} heigthImage={52} />
          </Box>
          <Box marginTop={"5px"}>
            <Typography fontWeight={"600"} fontSize={"8px"}>
              لوازم خانه و آشپزخانه
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            bgcolor={"#07BEB8"}
            width={"74px"}
            height={"74px"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography fontWeight={"700"} fontSize={"10px"} color={"#fff"}>
              موارد بیشتر
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        // borderBottom={"80px solid #BD0B1E"}
        height={"300px"}
        borderRadius={"0px 0px 15px 0px"}
        marginRight={"1rem"}
        display={"flex"}
        sx={{
          overflow: "hidden",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            // backgroundColor: "#0000001f !important",
            width: "0px",
          },
        }}
        // zIndex={0}
      >
        <Box>
          <Box position={"relative"} paddingTop={"10.4rem"} marginRight={"1.5rem"} width={"100px"}>
            <Box
              component={Typography}
              color={"#BD0B1E"}
              fontSize={"28px"}
              fontWeight={"900"}
              position={"absolute"}
              bottom={"15px"}
              right={"20px"}
            >
              %
            </Box>
            <ImageComponent altImage="3" urlImage="3.png" widthImage={60} heigthImage={82} />
          </Box>
          <Box marginRight={"15px"}>
            <Typography fontWeight={"bold"} color={"#fff"}>
              تخفیف ویژه
            </Typography>
          </Box>
        </Box>
        <Box
          paddingTop={"3.75rem"}
          display={"flex"}
          columnGap={"1rem"}
          width={"10000px"}
          // zIndex={10}
        >
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
          <Box bgcolor={"#fff"} width={"153px"} height={"225px"} borderRadius={"15px"}></Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        height={"80px"}
        bgcolor={"#BD0B1E"}
        marginRight={"1rem"}
        borderRadius={"0px 0px 15px 0px"}
        marginTop={"-80px"}
      ></Box>
      <Box
        marginRight={"1rem"}
        marginTop={"2rem"}
        display={"flex"}
        flexDirection={"column"}
        rowGap={"1rem"}
      >
        <Box component={Typography} fontSize={"13px"} fontWeight={"700"}>
          20 فروشگاه نزدیک شما
        </Box>
        <Box display={"flex"}>
          <Box>
            <CiLocationOn color="#07BEB8" size={15} />
          </Box>
          <Box component={Typography} fontWeight={"500"} fontSize={"11px"} color={"#8B9095"}>
            کرمان ، بلوار جمهوری ، نرسیده به پل معلم ، روبروی منابع طبیعی
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
