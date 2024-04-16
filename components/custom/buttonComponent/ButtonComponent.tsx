import { Box, Button, Typography } from "@mui/material";

interface buttonComponentProps {
  buttonData: any;
}

const ButtonComponent = ({ buttonData, ...restProps }: buttonComponentProps) => {
  console.log("button", buttonData);
  return (
    <Box sx={buttonData.sxParent}>
      <Button
        sx={buttonData.sx}
        color={buttonData.color}
        variant={buttonData.type}
        fullWidth
        style={{}}
        {...restProps}
      >
        <Typography>{buttonData.title}</Typography>
      </Button>
    </Box>
  );
};

export { ButtonComponent };
