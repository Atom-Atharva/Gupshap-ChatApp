import React from "react";
import AuthHeader from "../common/AuthHeader";
import LogInform from "./LogInform.js";

function RightStructurelogin() {
  return (
    <div className="w-full bg-secondary-light flex flex-col gap-16  ">
      <AuthHeader isLogin={true} />
      <LogInform />
    </div>
  );
}

export default RightStructurelogin;
