import { useLocalStorage } from "@/hooks";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1500,
  method: "GET" && "POST" && "DELETE" && "PATCH" && "PUT",
  headers: {
    "Content-Type": "Application/json",
  },
});

Axios.interceptors.request.use(
  function (request) {
    // console.log("===>");
    // const getAccessToken = useLocalStorage("GET_ITEMS", {}, "access_token");
    // if (getAccessToken) {
    //   request.headers["Authorization"] = `Bearer ${getAccessToken}`;
    // }
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
  async function (error: any) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return Axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

const httpsRequest = {
  GET: Axios.get,
  POST: Axios.post,
  DELETE: Axios.delete,
  PATCH: Axios.patch,
  PUT: Axios.put,
};

const ApiRegister = () => {
  const GetRequest = async (
    endPoint: string,
    IDRequest: number | null,
    infoResponse: boolean
  ) => {
    const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;
    const getData = await httpsRequest
      .GET(endPoint + IDRequestHandler)
      .then((response) => {
        return {
          data: response.data,
          all_data: infoResponse === true ? response : null,
          status: response.status,
        };
      })
      .catch((error: AxiosError) => {
        return {
          error,
          statusError: error.response?.status,
          message: error.message,
        };
      });
    return getData;
  };

  const PostRequest = (
    endPoint: string,
    IDRequest: number | null,
    dataRequest: any,
    keyName: string,
    infoResponse: boolean
  ) => {
    const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;

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
          .then((response: any) => response.data);
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
  };

  const DeleteRequest = (
    endPoint: string,
    IDRequest: number | null,
    keyName: string,
    infoResponse: boolean
  ) => {
    const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;

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
          .then((response: any) => response.data);
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
  };

  const PatchRequest = (
    endPoint: string,
    IDRequest: number | null,
    dataRequest: any,
    keyName: string,
    infoResponse: boolean
  ) => {
    const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;
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
          .then((response: any) => response.data);
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
  };

  const PutRequest = (
    endPoint: string,
    IDRequest: number | null,
    dataRequest: any,
    keyName: string,
    infoResponse: boolean
  ) => {
    const IDRequestHandler = IDRequest === null ? "" : `/${IDRequest}`;
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
          .then((response: any) => response.data);
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
  };

  return {
    GetRequest,
    PostRequest,
    DeleteRequest,
    PatchRequest,
    PutRequest,
    AxiosMethod: {
      GET: Axios.get,
      POST: Axios.post,
      DELETE: Axios.delete,
      PATCH: Axios.patch,
      PUT: Axios.put,
    },
  };
};

export { ApiRegister };
