import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templeHsApi = createApi({
  reducerPath: "templeHsApi",
  tagTypes: [
    "Doctors"
  ],
  baseQuery: fetchBaseQuery({
    // baseUrl: "${process.env.NEXT_PUBLIC_UMS_BACKEND_URL}/api",
    prepareHeaders: async (headers) => {
      const token = sessionStorage.getItem("token");


      if (token && !headers.get("authorization")) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  // refetchOnFocus: true,
  refetchOnReconnect: true,
});
