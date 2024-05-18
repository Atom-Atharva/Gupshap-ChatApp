import React from "react";
import InputBox from "../../common/InputBox";
import SignInUpBtn from "../../common/SignInUpBtn";
import PictureDP from "./PictureDP";

const MyForm = () => {
    return (
        <div className="flex flex-col gap-6 items-center">
            <PictureDP />
            <InputBox placeholder="Name" type="text" />
            <InputBox placeholder="Email" type="email" />
            <InputBox placeholder="Password" type="password" />
            <SignInUpBtn signIn={false} />
        </div>
    );
};

export default MyForm;
