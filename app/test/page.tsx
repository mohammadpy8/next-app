"use client";

import { ButtonCustom } from "@/components/module";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const TestPage = () => {
  const [result, setResult] = useState<any>([]);

  console.log("r=>", result);

  const fetchUsers = async () => {
    const res = await fetch(BASE_URL + "/todos");
    const json = await res.json();
    setResult(json);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box>
      <div>{result.length > 0 ? result.map((item: any) => <div key={item.id}>{item.title}</div>) : "loading"}</div>
      <Box>
        <ButtonCustom lable="" onClick={() => {}}/>
      </Box>
    </Box>
  );
};

export default TestPage;
