import React from "react";
import { bell, profile } from "./NavData";
const NavDown = () => {
  return (
    <div className="flex flex-col justify-end items-center gap-12">
      <img src={bell} className="w-8 h-8" alt="Bell" />
      <img src={profile} className="w-10" alt="Profile" />
    </div>
  );
};

export default NavDown;
