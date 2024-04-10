import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";

type PromiseAllRequest = {
  name: string;
  endPoint: string;
};

const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1500,
  method: "GET" && "POST" && "DELETE" && "PATCH" && "PUT",
  headers: {
    Accept: "Application/json",
  },
});

const createErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const apiError = error.response?.data;
    if (typeof apiError === "string" && (apiError as string).length > 0) {
      return apiError;
    }
    return apiError?.message || apiError?.error || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "Generic error message";
};
Axios.interceptors.request.use(
  function (request) {
    request.headers["Content-Type"] = "application/json";
    return request;
  },
  function (error) {
    const status = error?.response?.status || 0;
    const resBaseURL = error?.response?.config?.baseURL;
    if (resBaseURL === "baseURL" && status === 401) {
      if (localStorage.getItem("token")) {
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return Axios(originalRequest);
    }
    if (error.response && error.response.status >= 500) {
      const { response } = error;
      const message = createErrorMessage(error);
      if (message) {
        return {
          error: {
            contentType:
              response.headers["Content-Type"] ||
              response.headers["content-type"],
            message: createErrorMessage(error),
          },
        };
      }
    }
    const status = error.response?.status || 500;
    switch (status) {
      case 401: {
        return Promise.reject(new ApiError(error.message, "409"));
      }

      case 403: {
        return Promise.reject(new ApiError(error.message, "409"));
      }

      case 400: {
        return Promise.reject(new ApiError(error.message, "400"));
      }

      case 404: {
        return Promise.reject(new ApiError(error.message, "404"));
      }

      case 409: {
        return Promise.reject(new ApiError(error.message, "409"));
      }

      case 422: {
        return Promise.reject(new ApiError(error.message, "422"));
      }

      default: {
        return Promise.reject(new ApiError(error.message, "500"));
      }
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

function giveData(listData: any, listName: PromiseAllRequest[]) {
  const listAllData = listData?.map((data: any, index: number) => ({
    ...data,
    name: listName[index]?.name,
  }));
  return listAllData;
}

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
      .catch((error) => {
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
  };

  const AllGetRequest = async (endPointList: PromiseAllRequest[]) => {
    const getAllData = await axios
      .all(endPointList?.map((endPoint) => httpsRequest.GET(endPoint.endPoint)))
      .then((response) => {
        return {
          all_data: giveData(response, endPointList),
        };
      })
      .catch((error) => {
        return {
          error,
        };
      });
    return getAllData;
  };

  return {
    GetRequest,
    PostRequest,
    DeleteRequest,
    PatchRequest,
    PutRequest,
    AllGetRequest,
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
