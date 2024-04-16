import { Box, TextField } from "@mui/material";

type InputProps = {
  all_data: any;
  validation: any;
};

const Input = ({ all_data, validation, ...restProps }: InputProps) => {
  console.log("Input", restProps, all_data, validation);
  return (
    <Box width={"100%"}>
      <TextField
        variant="filled"
        sx={{
          width: "80%",
        }}
      />
    </Box>
  );
};

export { Input };
