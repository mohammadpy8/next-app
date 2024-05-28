import { Box, Typography, useTheme, type TypographyProps } from "@mui/material";
import { FC } from "react";

type TLabelModel = {
  model?: "subOne" | "subTwo" | "subThree";
  label: string;
} & Omit<TypographyProps, "">;



const LabelModel: FC<TLabelModel> = ({ label = "متن داخل لیبل", model = "subOne" }) => {
  const { typography } = useTheme();
  console.log("theme=>", typography);

  const LabelShow = () => {
    switch (model) {
      case "subOne":
        const styles = (typography as any).base_text;
        return <Typography {...styles}>{label}</Typography>;
    }
  };

  return <Box>{LabelShow()}</Box>;
};

export { LabelModel };
