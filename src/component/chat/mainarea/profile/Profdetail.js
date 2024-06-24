import React from "react";
import ProfileMain from "./ProfileMain";
import LogOutBtn from "../../../common/LogOutBtn";

const Profdetail = () => {
  return (
    <div className="flex flex-col py-16 h-screen  justify-between items-center w-[416px]">
      <ProfileMain />
      <div className="flex justify-center items-center">
        <LogOutBtn />
      </div>
    </div>
  );
};

export default Profdetail;
