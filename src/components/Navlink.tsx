import React from "react";
import { LinkType } from "./SidebarList";
import Link from "./Link";
import { RxDashboard } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

interface INavLink extends LinkType {
  isActive?: boolean;
  onClick?: () => void;
}

export const BigNavLink: React.FC<INavLink> = ({
  url,
  linkName,
  isActive,
  icon,
}) => {
  const handleIcon = () => {
    switch (icon) {
      case "dashboard":
        return <RxDashboard />;
      case "calendar":
        return <LuCalendarDays />;
    }
  };
  return (
    <Link href={url} className='text-none'>
      <div
        className={
          isActive
            ? "flex align-middle items-center h-2 p-8 bg-secondary text-primary font-bold"
            : "flex align-middle items-center h-2 p-8"
        }
      >
        {handleIcon()}
        <p
          color={isActive ? "primary.500" : "neutral.500"}
          //fontSize='16px'
          //fontWeight={isActive ? "700" : "400"}
          className='text-sm ml-4'
        >
          {linkName}
        </p>
        {isActive && <GoDotFill className='mt-1 ml-auto' />}
      </div>
    </Link>
  );
};
