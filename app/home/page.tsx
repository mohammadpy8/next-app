import { Avatar, Box, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack width="100%" height="100%">
      <Box marginTop="2rem" display="flex" justifyContent="space-between" marginX="1.5rem">
        <Box>
          <Avatar alt="profile-icon" src="image/avatar.png" />
        </Box>
        <Box color="#3563E9">
          <Typography fontSize="24px" fontWeight="700">
            MORENT
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;
