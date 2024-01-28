import { IUserType } from "@/types/user"
import React from "react";
export type LinkType = {
   url: string;
   linkName: string;
   icon: React.ReactNode;
};

export const NAV_LINKS: { [Key in IUserType]: LinkType[] } = {
   patient: [
      { linkName: "Dashboard", url: "/patient/dashboard", icon: "dashboard" },
      { linkName: "Appointments", url: "/patient/appointment", icon: "calendar" },
   ],
   doctor: [
      { linkName: "Dashboard", url: "/doctor/dashboard", icon: "" },
      { linkName: "Appointments", url: "/doctor/appointment", icon: "" },
   ]

}