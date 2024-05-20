"use client";

import { Box } from "@mui/material";
import { useState, type FC } from "react";

type CSVSelectorProps = {
  changeCSVHandler(data: string[][]): void;
};

type EventInputFileUploader = React.ChangeEvent<HTMLInputElement>;

const CSVSelector: FC<CSVSelectorProps> = ({ changeCSVHandler }) => {
  const handleInputFile = async (event: EventInputFileUploader) => {
    if (event.target?.files) {
      try {
        const file = event.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        const resposne = await fetch(fileUrl);
        const text = await resposne.text();
        const lines = text.split("\n");
        const _data = lines.map((_line) => _line.split(","));
        changeCSVHandler(_data);
      } catch (error) {
        console.log("err for CSV==>", error);
      }
    }
  };

  return (
    <Box>
      <input type="file" onChange={handleInputFile} accept=".csv" />
    </Box>
  );
};

const CSVReader = () => {
  const [data, setData] = useState<string[][]>([]);
  const headers = data[0];
  const rows = headers?.slice(1);

  return (
    <Box>
      <CSVSelector changeCSVHandler={(_data) => setData(_data)} />
      <table>
        <thead>
          <tr>
            {headers?.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((rowData, i) => {
            const newRowData = [...rowData];
            console.log("data===>", newRowData);
            return (
              <tr key={i}>
                {newRowData?.map((data: any, i: number) => {
                  const newData = [...data].join("");
                  console.log("ff=>", newData);
                  return <td key={i}>{data}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export { CSVSelector, CSVReader };
