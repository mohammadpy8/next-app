import { Box, IconButton, Stack, Typography } from "@mui/material";
import { SiWeblate } from "react-icons/si";
import Icon from "./Icon";

const LoginPage = () => {
  return (
    <Box
      width="1440px"
      height="700px"
      bgcolor="#ffffff"
      borderRadius="24px"
      mt="125px"
      display="flex"
      sx={{
        boxShadow: "0px 1px 6px 0px rgba(213, 213, 213, 0.72)",
        overflow: "hidden",
      }}
    >
      <Box>
        <Icon />
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <IconButton>
            <SiWeblate color="red" size={50} />
          </IconButton>
          <Typography fontSize="22px" fontWeight="600" color="#1a1a1a">
            ایده پردازان مملی
          </Typography>
        </Box>
        <Box marginTop="25px">
          <Typography fontSize="16px" fontWeight="700" color="#1a1a1a">
            خیلی خوشحالم که دوباره شما را می بینم
          </Typography>
        </Box>
        <Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
