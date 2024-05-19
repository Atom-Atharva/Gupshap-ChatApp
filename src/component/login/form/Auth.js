import React from "react";
import AuthBtn from "../../common/AuthBtn";
import { authBtns } from "../loginData";
function Auth() {
    return (
        <div className="flex justify-center items-center px-9 py-10  gap-10">
            {authBtns.map((btn, index) => {
                return <AuthBtn data={btn} key={index} />;
            })}
        </div>
    );
}

export default Auth;
