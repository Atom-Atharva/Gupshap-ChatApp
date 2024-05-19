import React from "react";
import Form from "./Form";

function LogInform() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-1">Welcome Back!</h2>
        <h3 className="text-lg">Login into your account</h3>
      </div>
      <Form />
    </div>
  );
}

export default LogInform;
