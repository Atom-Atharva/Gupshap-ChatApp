import React from "react";
import { email, profileName, profileimg } from "./ProfileData";

const ProfileMain = () => {
  return (
    <div className="flex flex-col  gap-8 ">
      <div className="flex items-center justify-center">
        <img src={profileimg} className="w-60 h-60"></img>
      </div>

      <div className="flex flex-col text-center gap-2 font-semibold">
        <div className="text-4xl ">{profileName}</div>
        <div className="text-base ">{email}</div>
      </div>
    </div>
  );
};

export default ProfileMain;
