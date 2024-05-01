import { Box, Button, Typography } from "@mui/material";

interface buttonComponentProps {
  buttonData: any;
  onClickHandler?: () => void;
}

const ButtonComponent = ({
  buttonData,
  onClickHandler = () => {},
  ...restProps
}: buttonComponentProps) => {
  console.log("button", buttonData);
  return (
    <Box sx={buttonData.sxParent}>
      <Button
        sx={buttonData.sx}
        color={buttonData.color}
        variant={buttonData.type}
        fullWidth
        style={{}}
        onClick={onClickHandler}
        {...restProps}
      >
        <Typography>{buttonData.title}</Typography>
      </Button>
    </Box>
  );
};

export { ButtonComponent };
