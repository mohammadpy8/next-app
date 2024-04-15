import { Box, Button, Typography } from "@mui/material";

const BottomNavigation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 0px 8px 0px #00ff00",
        borderRadius: "15px",
        width: { xs: "350px", sm: "420px" },
      }}
      position={"fixed"}
      bottom={20}
      mx={4}
    >
      <Box display={"flex"} justifyContent={"space-between"} px={4} py={1}>
        <Button>
          <Typography>home</Typography>
        </Button>
        <Button>
          <Typography>profile</Typography>
        </Button>
        <Button>
          <Typography>logout</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export { BottomNavigation };
