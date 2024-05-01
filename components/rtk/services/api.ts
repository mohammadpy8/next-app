import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const bassQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  prepareHeaders: (headers, { getState }) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithRetry = retry(bassQuery, { maxRetries: 6 });
const api = createApi({
  reducerPath: "splitPath",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Times", "Posts", "Counter"],

  endpoints: () => ({}),
});

const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => "test",
  }),
});

export { enhancedApi, api };
