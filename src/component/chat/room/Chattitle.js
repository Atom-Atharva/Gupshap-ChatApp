import React from "react";
import { profileimg, profileName } from "./ChatData";

const Chattitle = () => {
  return (
    <div className="flex h-20 px-5 gap-2  items-center border-b border-black-opacity-20">
      <div className="flex items-center py-1 gap-5">
        <img
          src={profileimg}
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-xl font-semibold">{profileName}</h1>
      </div>
    </div>
  );
};

export default Chattitle;
