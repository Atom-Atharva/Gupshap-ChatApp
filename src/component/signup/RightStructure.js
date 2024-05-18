import React from "react";
import AuthHeader from "../common/AuthHeader";
import SignUpForm from "./SignUpForm";

const RightStructure = () => {
    return (
        <div className="w-full bg-secondary-light">
            <AuthHeader isLogin={false} />
            <SignUpForm />
        </div>
    );
};

export default RightStructure;
