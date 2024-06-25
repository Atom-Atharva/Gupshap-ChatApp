import React from "react";
import { bell, profile } from "./NavData";
import { useSelector } from "react-redux";
const NavDown = ({
  setActiveComponent,
  setNotification,
  notification,
  activeComponent,
}) => {
  const user = useSelector((store) => store.user);
  const profileimg = user?.avatar.url || profile;
  return (
    <div className="flex flex-col justify-end items-center gap-12">
      <img
        src={bell}
        className="w-8 h-8 cursor-pointer"
        alt="Bell"
        onClick={() => setNotification(!notification)}
      />
      <div
        className={`w-full cursor-pointer flex justify-center py-3 ${
          activeComponent === "profile" ? "bg-secondary-darker" : ""
        }`}
        onClick={() => setActiveComponent("profile")}
      >
        <img src={profileimg} className="w-10  rounded-full" alt="Profile" />
      </div>
    </div>
  );
};

export default NavDown;
