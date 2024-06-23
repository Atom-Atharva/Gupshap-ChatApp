import React from "react";
import { bell, profile } from "./NavData";
const NavDown = ({ setActiveComponent, setNotification, notification }) => {
  return (
    <div className="flex flex-col justify-end items-center gap-12">
      <img
        src={bell}
        className="w-8 h-8 cursor-pointer"
        alt="Bell"
        onClick={() => setNotification(!notification)}
      />
      <img
        src={profile}
        className="w-10 cursor-pointer"
        alt="Profile"
        onClick={() => setActiveComponent("profile")}
      />
    </div>
  );
};

export default NavDown;
