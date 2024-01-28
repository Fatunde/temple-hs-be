import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setToken, setUser } from "@/store/slice/auth.slice";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/config/constants";
import React, { ReactNode, useEffect, useState } from "react";

const GuestLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAuthUserRouting = () => {
    router.replace("/patient/dashboard");
  };

  const getLoggedInUser = async (userToken: string) => {
    setIsLoading(true);
    try {
      const token = await sessionStorage.getItem("token");
      const res = await axios.get(`${API_URL}/auth/token`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (res.data) {
        dispatch(setUser(res.data));
        dispatch(setToken(userToken));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) return;
    const token = sessionStorage.getItem("token");
    if (!token) return;
    getLoggedInUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user) {
      handleAuthUserRouting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (isLoading) return <div className='w-90 h-80 bg-white'>Loading...</div>;

  return (
    <div className='min-h-screen h-full w-screen bg-white'>
      <main>{children}</main>
    </div>
  );
};

export default GuestLayout;
