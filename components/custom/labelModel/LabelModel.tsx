import { Box, Typography, useTheme, type TypographyProps } from "@mui/material";
import { FC } from "react";

type TLabelModel = {
  model?: "subOne" | "subTwo" | "subThree";
  label: string;
} & Omit<TypographyProps, "">;

const LabelModel: FC<TLabelModel> = ({ label = "متن داخل لیبل", model = "subOne" }) => {
  const { typography } = useTheme();

  const stylesTypography = {
    subOne: (typography as any).base_text,
    subTwo: (typography as any).meduim_text,
    subThree: (typography as any).large_text,
  };

  const LabelShow = () => {
    switch (model) {
      case "subOne":
        return <Typography {...stylesTypography[model]}>{label}</Typography>;
    }
  };

  return <Box>{LabelShow()}</Box>;
};

export { LabelModel };
