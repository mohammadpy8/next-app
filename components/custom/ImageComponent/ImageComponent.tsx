import { Box } from "@mui/material";
import Image from "next/image";

type ImageComponentProps = {
  urlImage: string;
  altImage: string;
  widthImage: number;
  heigthImage: number;
  styleImage?: any;
};

const ImageComponent = (props: ImageComponentProps) => {
  const { heigthImage, urlImage, widthImage, altImage, styleImage } = props;

  return (
    <Box>
      <Image
        src={`/image/${urlImage}`}
        width={widthImage}
        height={heigthImage}
        alt={altImage}
        style={styleImage}
      />
    </Box>
  );
};

export { ImageComponent };
