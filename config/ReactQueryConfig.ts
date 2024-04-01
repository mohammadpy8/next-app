const ReactQueryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    staleTime: 60 * 1000,
    gcTime: 10 * 1000,
  },
};

export { ReactQueryConfig };
