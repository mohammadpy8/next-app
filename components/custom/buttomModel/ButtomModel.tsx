import { Box, Button, type ButtonProps, CircularProgress, Typography } from "@mui/material";
import type { FC } from "react";

type TButtonModel = {
  model: "loading" | "fill" | "outline";
  lable: string;
} & Omit<ButtonProps, "">;

const ButtomModel: FC<TButtonModel> = ({ model = "fill", onClick: clickHandler = () => {}, lable = "متن داخل دکمه" }) => {
  const ButtonShow = () => {
    switch (model) {
      case "loading":
        return (
          <Button
            disabled
            disableRipple
            sx={{ backgroundColor: "#e3e3e3", borderRadius: "15px", width: "150px", height: "50px" }}
            onClick={clickHandler}
          >
            <Box display="flex" alignItems="center" justifyContent="center" columnGap="10px">
              <Box mt="5px">
                <CircularProgress sx={{ color: "#a8a8a8" }} size={20} />
              </Box>
              <Box>
                <Typography fontWeight="500">{lable}</Typography>
              </Box>
            </Box>
          </Button>
        );
      case "fill":
        return (
          <Button
            disableRipple
            sx={{ backgroundColor: "#2200b8", borderRadius: "15px", width: "150px", height: "50px" }}
            onClick={clickHandler}
          >
            <Typography>{lable}</Typography>
          </Button>
        );
    }
  };

  return <Box>{ButtonShow()}</Box>;
};

export { ButtomModel };
