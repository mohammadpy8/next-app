import { useLocalStorage } from "@/hooks";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

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

const ApiRegister = (
  endPoint: string,
  typeRequset: string,
  dataRequest: any,
  infoResponse: boolean,
  IDRequest: number | null,
  queryKeyName: string
) => {
  const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;

  switch (typeRequset) {
    case "GET":
      const {
        data,
        isPending,
        error,
        status,
        isError,
        isFetching,
        isLoading,
        isSuccess,
      } = useQuery({
        queryKey: [queryKeyName],
        queryFn: () => {
          return httpsRequest
            .GET(endPoint + IDRequestHandler)
            .then((response) => response.data);
        },
      });
      return {
        all_data: data,
        isPending: isPending,
        error: error,
        statusRequset: status,
        isError: isError,
        isFetching: isFetching,
        isLoading: isLoading,
        isSuccess: isSuccess,
      };

    case "POST":
      httpsRequest.POST(endPoint + IDRequestHandler, dataRequest);

    case "DELETE":
      const deleteData = httpsRequest
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
      const patchData = httpsRequest
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
      const putData = httpsRequest
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

export { ApiRegister };
