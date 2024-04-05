import { Box } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

interface loaderComponentProps {
  heigthLoader: string;
  widthLoader: string;
  colorLoader: string;
  wrapperStyleLoader: any;
  radiusLoader: string;
}

const LoaderComponent = ({
  heigthLoader,
  widthLoader,
  colorLoader,
  wrapperStyleLoader,
  radiusLoader,
}: loaderComponentProps) => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <ThreeDots
        visible={true}
        height={heigthLoader}
        width={widthLoader}
        color={colorLoader}
        radius={radiusLoader}
        ariaLabel="three-dots-loading"
        wrapperStyle={wrapperStyleLoader}
        wrapperClass=""
      />
    </Box>
  );
};

export { LoaderComponent };
