import React, { useRef, ReactNode } from "react";
import { logoutUser } from "@/store/slice/auth.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useRouter } from "next/router";
import { BigNavLink } from "./Navlink";
import { NAV_LINKS } from "./SidebarList";
import { GoBell } from "react-icons/go";
import Image from "next/image";

const AuthHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const btnRef = useRef(null);

  const logout = async () => {
    await dispatch(logoutUser());
  };

  console.log(user);
  return (
    <div className='flex align-middle m-auto w-full'>
      {/* HAMBURGER AND LOGO */}

      {/* NAV LINKS FOR BIG SCREENS */}
      <div className='align-middle min-h-screen fixed w-1/5 shadow-md'>
        <div className='pl-8'>
          <Image
            src='/images/temple-icon.svg'
            height='120%'
            width='120%'
            alt='img'
          />
        </div>

        {NAV_LINKS["patient"].map((link) => {
          return (
            <BigNavLink
              key={link.url}
              {...link}
              isActive={router.pathname.startsWith(link.url)}
            />
          );
        })}
      </div>
      <div className='w-4/5 ml-72  overflow-hidden'>
        <div className='border-b w-4/5 border-neutral-500 flex justify-between h-24 items-center p-8 fixed bg-white'>
          <div className='align-middle font-bold'>Schedule Appointment</div>
          {/* NOTIFICATION BELL, PICTURE, AND NAME */}
          <div className='flex items-center space-x-2'>
            <GoBell className='mr-4' size='25px' />

            <Image
              src='/images/profile.svg'
              height='40%'
              width='40%'
              alt='img'
            />
            <div>
              <p className='text-sm'>
                {user?.first_name + " " + user?.last_name}
              </p>{" "}
              <small className='text-xs text-neutral'>{user?.email}</small>
            </div>
          </div>
        </div>
        <div className='h-24'></div>
        <div className='p-8 w-full'>{children}</div>
      </div>
    </div>
  );
};

export default AuthHeader;
