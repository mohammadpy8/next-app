"use client"

import { Paper, Grid, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#00ff00",
//   textAlign: "center",
//   color: "red",
  
// }));

const Section = () => {

  const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid item xs={6} md={8}> */}
          <Box bgcolor={theme.palette.secondary.main} width="150px" height="250px"></Box>
          {/* <Item>1</Item> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
};

export default Section;
