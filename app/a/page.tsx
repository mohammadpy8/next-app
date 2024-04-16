"use client";

import { Box, TextField, Typography } from "@mui/material";
import { type ChangeEvent, useState } from "react";
import dataArray from "./data";
import debounce from "lodash/debounce";

const SearchBox = () => {
  const [valueInput, setValueInput] = useState<string>("");
  const [resultSearchBox, setResultSearchBox] = useState<string[]>([]);

  const _changeBoxHandle = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getValueOfInput = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    setValueInput(getValueOfInput);
    const filterData = dataArray.filter((item: string) =>
      item.toLowerCase().includes(getValueOfInput.toLowerCase())
    );
    console.log("ll", valueInput.length)
    if (getValueOfInput.length) {
      setResultSearchBox(filterData);
    } else {
      setResultSearchBox([]);
    }
    console.log("value==>", getValueOfInput, filterData);
  };

  return (
    <Box width={"100%"} height={"350px"} bgcolor={"#3255"} margin={"20px"}>
      <Box
        sx={{
          padding: "0.8rem",
          width: "85%",
        }}
      >
        <TextField value={valueInput} onChange={_changeBoxHandle} />
      </Box>
      <Box display={"flex"} flexDirection={"row-reverse"} columnGap={"25px"}>
        <Box
          component={Typography}
          sx={{
            color: "red",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Result :
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          {resultSearchBox.length > 0 && resultSearchBox?.map((text: string, index) => (
            <Box
              key={index}
              component={Typography}
              sx={{
                color: "#00ff",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {text}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBox;
