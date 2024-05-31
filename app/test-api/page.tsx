"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const TestPage = async () => {
  const getData = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await getData.json();

  console.log("data ===>", data);

  return (
    <Box>
      {data.map((item: any) => (
        <Box key={item.id}>{item.username}</Box>
      ))}
    </Box>
  );
};

const getDataByClientSide = () => {
  const [getDataValue, setGetDataValue] = useState<any>([]);

  const getData = async () => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await getData.json();
    setGetDataValue(data);
  };

  console.log("dd ===>", getDataValue);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {getDataValue.map((item: any) => (
        <Box key={item.id}>{item.title}</Box>
      ))}
    </Box>
  );
};

export default getDataByClientSide;
