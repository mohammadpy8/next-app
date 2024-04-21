"use client";

import { LoaderComponent } from "@/components/custom";
import { ApiRegister } from "@/config";
import { useEffect, useState } from "react";

const Loading = () => {
  const { GetRequest } = ApiRegister();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const ff = async () => {
      const ss = await GetRequest("todos", null, true);
      setData(ss);
    };

    ff();
  }, []);

  console.log(data);

  return (
    <div>
      {data.data ? (
        data.data?.map((item: any) => {
          return <div key={item.id}>{item.id}</div>;
        })
      ) : (
        <LoaderComponent
          colorLoader="red"
          heigthLoader="100"
          radiusLoader="10"
          widthLoader="200"
          wrapperStyleLoader={{}}
        />
      )}
    </div>
  );
};

export default Loading;
