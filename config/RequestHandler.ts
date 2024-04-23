import { useLocalStorage } from "@/hooks";

type methodReqestType = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

const base_url = process.env.base_url;

const RequestHandler = (endPoint: string) => {
  const handleHeaders = () => {
    const getToken = useLocalStorage({}, "token").getItems();
    if (getToken) {
      const headers_request = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authentication: `Bearer ${getToken}`,
      };
      return headers_request;
    } else {
      const headers_request = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      return headers_request;
    }
  };

  const convertToStringify = (data: any) => {
    return JSON.stringify(data);
  };

  const httpReq = (
    method: methodReqestType,
    dataReq?: any,
    IDRequest?: any,
    typeCache?: "default" | "force-cache" | "no-store" | "no-cache",
    revalidateTime?: number | undefined
  ) => {
    switch (method) {
      case "GET":
        return fetch(`${base_url}${endPoint}${IDRequest}`, {
          method: "GET",
          headers: handleHeaders(),
          cache: typeCache ?? "force-cache",
          next: { revalidate: revalidateTime ?? 3600 },
        });
      case "POST":
        return fetch(`${base_url}${endPoint}${IDRequest}`, {
          method: "POST",
          headers: handleHeaders(),
          body: convertToStringify(dataReq),
          cache: typeCache ?? "force-cache",
          next: { revalidate: revalidateTime ?? 3600 },
        });
      case "PATCH":
        return fetch(`${base_url}${endPoint}${IDRequest}`, {
          method: "PATCH",
          headers: handleHeaders(),
          body: convertToStringify(dataReq),
          cache: typeCache ?? "force-cache",
          next: { revalidate: revalidateTime ?? 3600 },
        });
      case "PUT":
        return fetch(`${base_url}${endPoint}${IDRequest}`, {
          method: "PUT",
          headers: handleHeaders(),
          body: convertToStringify(dataReq),
          cache: typeCache ?? "force-cache",
          next: { revalidate: revalidateTime ?? 3600 },
        });
      case "DELETE":
        return fetch(`${base_url}${endPoint}${IDRequest}`, {
          method: "DELETE",
          headers: handleHeaders(),
          cache: typeCache ?? "force-cache",
          next: { revalidate: revalidateTime ?? 3600 },
        });
    }
  };

  return {
    getHttpReqest: async (
      method: methodReqestType,
      dataReq?: any,
      IDReq?: number | null,
      typeCache?: "default" | "force-cache" | "no-store" | "no-cache",
      revalidateTime?: number 
    ) => {
      const IDRequestHandler = IDReq === null ? "" : `/${IDReq}`;
      httpReq(method, dataReq, IDReq, IDRequestHandler, typeCache, revalidateTime).then((res) => {
        return {
          status: res.status,
        };
      });
    },
  };
};

export { RequestHandler };
