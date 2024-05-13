import { styled, useTheme } from "@mui/material";

const StyledFormat = (custom_style: Object = {}, tag: any = "div") => {
  const { palette } = useTheme();

  console.log("pallate ===>", palette);

  const _styles = styled(tag ?? "div")(({ ...rest_theme }) => {
    console.log("rest ====>", rest_theme);
    return { custom_style };
  });

  return { _styles, _theme: palette };
};

export { StyledFormat };
