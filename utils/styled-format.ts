import { styled, useTheme } from "@mui/material";

const StyledFormat = (custom_style: Object = {}, tag: any = "div") => {
  const { palette } = useTheme();

  console.log("pallate ===>", palette);

  const _styles = styled(tag ?? "div")(({}) => {
    return { custom_style };
  });

  return { _styles, _theme: palette };
};

export { StyledFormat };
