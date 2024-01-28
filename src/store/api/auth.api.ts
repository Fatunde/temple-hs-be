import { ILoginUserRequest, ILoginUserResponse } from "@/types/auth";
import { templeHsApi } from "@/store/slice/api.slice";
import { API_URL } from "@/config/constants";

export const authApiSlice = templeHsApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserRequest>({
      query: (data) => ({
        url: `${API_URL}/auth/login`,
        method: "POST",
        body: data,
      }),
    }),

    registerUser: builder.mutation<ILoginUserResponse, object>({
      query: (data) => ({
        url: `${API_URL}/auth/register`,
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApiSlice;
