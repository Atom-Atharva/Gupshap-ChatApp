import React from "react";
import { user as userData } from "./ProfileData";
import { useSelector } from "react-redux";

const ProfileMain = () => {
  // TODO: This needs to be updated After Complete of project
  const user = useSelector((store) => store.user) || userData;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center">
        <img
          src={user?.avatar.url}
          className="w-60 h-60 rounded-full"
          alt="DP"
        ></img>
      </div>

      <div className="flex flex-col text-center gap-2 font-semibold">
        <div className="text-4xl ">{user.name}</div>
        <div className="text-base ">{user.email}</div>
      </div>
    </div>
  );
};

export default ProfileMain;
