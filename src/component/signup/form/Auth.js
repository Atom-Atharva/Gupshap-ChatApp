import React from "react";
import AuthBtn from "../../common/AuthBtn";
import { authBtns } from "../signupData";

const Auth = () => {
    return (
        <div className="flex flex-col gap-4">
            {authBtns.map((btn, index) => {
                return (
                    <AuthBtn
                        data={btn}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Auth;
