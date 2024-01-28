import { templeHsApi } from "@/store/slice/api.slice";
import { IDoctorsResponse } from "@/types/user";
import { API_URL } from "@/config/constants";

export const doctorApiSlice = templeHsApi.injectEndpoints({
   endpoints: (builder) => ({
      getDoctors: builder.query<IDoctorsResponse, void>({
         query: () => `${API_URL}/doctor`,
         providesTags: ["Doctors"],
      }),
   }),
   overrideExisting: true,
});

export const {
   useGetDoctorsQuery
} = doctorApiSlice;
