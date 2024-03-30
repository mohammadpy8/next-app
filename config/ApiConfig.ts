"use clinet";

import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";
import { Dispatch } from "react";

const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1500,
  method: "GET" && "POST" && "DELETE" && "PATCH" && "PUT",
  headers: {
    "Content-Type": "Application/json",
  },
});

Axios.interceptors.request.use(
  function (request) {
    const getAccessToken = useLocalStorage("GET_ITEMS", {}, "access_token");
    if (getAccessToken) {
      request.headers["Authorization"] = `Bearer ${getAccessToken}`;
    }
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return Axios(originalRequest);
    }
  }
);

const httpsRequest = {
  GET: Axios.get,
  POST: Axios.post,
  DELETE: Axios.delete,
  PATCH: Axios.patch,
  PUT: Axios.put,
};

const ApiRegister = async (
  endPoint: string,
  typeRequset: string,
  dataRequest: any,
  infoResponse: boolean,
  IDRequest: number | null,
  saveDataToState: Dispatch<any>
) => {
  const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;
  console.log("save======>", saveDataToState);

  switch (typeRequset) {
    case "GET":
      const getData = await httpsRequest
        .GET(endPoint + IDRequestHandler)
        .then((response) => {
          saveDataToState(response.data);
          return {
            data: response.data,
            status: response.status,
            message: response.statusText,
            detailsResponse: infoResponse === true ? response : null,
          };
        })
        .catch((error) => {
          return {
            errorMessage: error.message,
            statusError: error.status,
            detailError: infoResponse === true ? error : null,
          };
        });

      return getData;
    case "POST":
      const postData = await httpsRequest
        .POST(endPoint + IDRequestHandler, dataRequest)
        .then((response) => {
          return {
            data: response.data,
            status: response.status,
            message: response.statusText,
            detailsResponse: infoResponse === true ? response : null,
          };
        })
        .catch((error) => {
          return {
            errorMessage: error.message,
            statusError: error.status,
            detailError: infoResponse === true ? error : null,
          };
        });

      return postData;
    case "DELETE":
      const deleteData = await httpsRequest
        .DELETE(endPoint + IDRequestHandler)
        .then((response) => {
          return {
            data: response.data,
            status: response.status,
            message: response.statusText,
            detailsResponse: infoResponse === true ? response : null,
          };
        })
        .catch((error) => {
          return {
            errorMessage: error.message,
            statusError: error.status,
            detailError: infoResponse === true ? error : null,
          };
        });
      return deleteData;
    case "PATCH":
      const patchData = await httpsRequest
        .PATCH(endPoint + IDRequestHandler, dataRequest)
        .then((response) => {
          return {
            data: response.data,
            status: response.status,
            message: response.statusText,
            detailsResponse: infoResponse === true ? response : null,
          };
        })
        .catch((error) => {
          return {
            errorMessage: error.message,
            statusError: error.status,
            detailError: infoResponse === true ? error : null,
          };
        });
      return patchData;
    case "PUT":
      const putData = await httpsRequest
        .PUT(endPoint + IDRequestHandler, dataRequest)
        .then((response) => {
          return {
            data: response.data,
            status: response.status,
            message: response.statusText,
            detailsResponse: infoResponse === true ? response : null,
          };
        })
        .catch((error) => {
          return {
            errorMessage: error.message,
            statusError: error.status,
            detailError: infoResponse === true ? error : null,
          };
        });
      return putData;
  }
};

export default ApiRegister;
