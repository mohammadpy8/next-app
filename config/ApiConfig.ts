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
  keyName: string
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
        queryKey: [keyName],
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
      const {
        mutate: mutatePost,
        isPending: isPendingPost,
        error: errorPost,
        status: statusPost,
        data: dataPost,
        isSuccess: isSuccessPost,
      } = useMutation({
        mutationKey: [keyName],
        mutationFn: () => {
          return httpsRequest
            .POST(endPoint + IDRequestHandler, dataRequest)
            .then((response) => response.data);
        },
      });
      return {
        PostData: mutatePost,
        error: errorPost,
        status: statusPost,
        isPending: isPendingPost,
        data: infoResponse === true ? dataPost : null,
        isSuccess: isSuccessPost,
      };

    case "DELETE":
      const {
        mutate: mutateDelete,
        isPending: isPendingDelete,
        error: errorDelete,
        status: statusDelete,
        data: dataDelete,
        isSuccess: isSuccessDelete,
      } = useMutation({
        mutationKey: [keyName],
        mutationFn: () => {
          return httpsRequest
            .DELETE(endPoint + IDRequestHandler)
            .then((response) => response.data);
        },
      });
      return {
        DeleteData: mutateDelete,
        isPending: isPendingDelete,
        error: errorDelete,
        status: statusDelete,
        data: infoResponse === true ? dataDelete : null,
        isSuccess: isSuccessDelete,
      };

    case "PATCH":
      const {
        mutate: mutatePatch,
        status: statusPatch,
        isPending: isPendingPatch,
        error: errorPatch,
        data: dataPatch,
        isSuccess: isSuccessPatch,
      } = useMutation({
        mutationKey: [keyName],
        mutationFn: () => {
          return httpsRequest
            .PATCH(endPoint + IDRequestHandler, dataRequest)
            .then((response) => response.data);
        },
      });
      return {
        PatchData: mutatePatch,
        status: statusPatch,
        isPending: isPendingPatch,
        error: errorPatch,
        data: infoResponse === true ? dataPatch : null,
        isSuccess: isSuccessPatch,
      };

    case "PUT":
      const {
        mutate: mutatePut,
        data: dataPut,
        error: errorPut,
        isPending: isPendingPut,
        isSuccess: isSuccessPut,
        status: statusPut,
      } = useMutation({
        mutationKey: [keyName],
        mutationFn: () => {
          return httpsRequest
            .PUT(endPoint + IDRequestHandler, dataRequest)
            .then((response) => response.data);
        },
      });
      return {
        PutData: mutatePut,
        data: infoResponse === true ? dataPut : null,
        error: errorPut,
        isPending: isPendingPut,
        isSuccess: isSuccessPut,
        status: statusPut,
      };
  }
};

export { ApiRegister };
