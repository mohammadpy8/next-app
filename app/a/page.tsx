import { Box } from "@mui/material";
import { Checkbox, Button } from "@nextui-org/react";

const page = () => {
  return (
    <Box>
      <Checkbox defaultSelected size="lg">
        Option
      </Checkbox>
      <Button color="primary" variant="bordered">
        Bordered
      </Button>
    </Box>
  );
};


export default page;
