import React from "react";
import AuthBtn from "../../common/AuthBtn";
import { authBtns } from "../signupData";

const Auth = () => {
    return (
        <div className="flex flex-col gap-4">
            {authBtns.map((btn) => {
                return <AuthBtn data={btn} />;
            })}
        </div>
    );
};

export default Auth;
