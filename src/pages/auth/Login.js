import React from "react";
import SignInImg from "../../component/login/SignInImg";
import RightStructurelogin from "../../component/login/RightStructurelogin";

const Login = () => {
  return (
    <div className="flex">
      <RightStructurelogin />
      <SignInImg />
    </div>
  );
};

export default Login;
