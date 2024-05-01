import { api } from "@/components/rtk/services";
interface CounterResponse {
  counter: number;
}

const counterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCount: build.query<CounterResponse, void>({
      query: () => "count",
      providesTags: ["Counter"],
    }),
    increamentCount: build.mutation<CounterResponse, number>({
      query(amount) {
        return {
          url: "posts",
          method: "PUT",
          body: { amount },
        };
      },
      invalidatesTags: ["Counter"],
    }),
    decreamentCount: build.mutation<CounterResponse, number>({
      query(amount) {
        return {
          url: "desc",
          method: "PUT",
          body: { amount },
        };
      },
      invalidatesTags: ["Counter"],
    }),
  }),
});

const { useDecreamentCountMutation, useGetCountQuery, useIncreamentCountMutation } = counterApi;
export { useDecreamentCountMutation, useGetCountQuery, useIncreamentCountMutation, counterApi };
