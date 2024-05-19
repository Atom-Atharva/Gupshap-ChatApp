import React from "react";
import InputBox from "../../common/InputBox";
import SignInUpBtn from "../../common/SignInUpBtn";

function MyForm() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center px-20 py-10">
      <InputBox placeholder="Email" type="email" />
      <InputBox placeholder="Password" type="password" />
      <SignInUpBtn signIn={true} />
    </div>
  );
}

export default MyForm;
