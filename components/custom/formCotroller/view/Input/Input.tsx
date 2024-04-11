import { Box, TextField } from "@mui/material";

const Input = (props: any) => {
  console.log("Input", props);
  return (
    <Box width={"100%"}>
      <TextField variant="filled" sx={{
        width:"80%"
      }}/>
    </Box>
  );
};

export { Input };
