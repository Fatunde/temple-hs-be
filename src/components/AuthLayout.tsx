import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setToken, setUser } from "@/store/slice/auth.slice";
import "regenerator-runtime/runtime";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import AuthHeader from "./Authheader";
import { API_URL } from "@/config/constants";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getLoggedInUser = async (userToken: string) => {
    try {
      const token = await sessionStorage.getItem("token");

      const res = await axios.get(`${API_URL}/auth/token`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        dispatch(setUser(res.data?.data));
        dispatch(setToken(userToken));
      }
    } catch (error: any) {
      if (error?.response?.data?.message === "jwt expired") {
        window.location.replace("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) return;
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
    getLoggedInUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user)
    return <div className='w-60 h-80 bg-white text-black'>Loading...</div>;

  return (
    <div className='w-full h-full min-h-40 bg-white'>
      <div className='w-full h-full min-h-40 m-auto pb-2'>
        <AuthHeader>{children}</AuthHeader>
      </div>
    </div>
  );
};

export default AuthLayout;
