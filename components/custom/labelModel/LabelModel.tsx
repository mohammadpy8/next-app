import { Box, Typography, useTheme, type TypographyProps } from "@mui/material";
import type { CSSObject as MuiCSSObject } from "@mui/material/styles";
import type { FC } from "react";

type TModel = "subOne" | "subTwo" | "subThree";

type TLabelModel = {
  model?: TModel;
  label: string;
  customSx?: MuiCSSObject;
} & Omit<TypographyProps, "sx" | "fontFamily">;

const LabelModel: FC<TLabelModel> = ({ label = "متن داخل لیبل", model = "subOne", customSx }) => {
  const { typography } = useTheme();

  const models = ["subOne", "subTwo", "subThree"];

  const stylesTypography = {
    subOne: (typography as any).base_text,
    subTwo: (typography as any).meduim_text,
    subThree: (typography as any).large_text,
  };

  const ShowLabelModel = () => {
    const findModel = models.find((m) => m === model) as TModel;
    return (
      <Typography sx={{ ...customSx }} {...stylesTypography[findModel]}>
        {label}
      </Typography>
    );
  };
  return <Box>{ShowLabelModel()}</Box>;
};

export { LabelModel };
