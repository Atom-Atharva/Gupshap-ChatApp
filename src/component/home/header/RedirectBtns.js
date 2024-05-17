import React from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "../../common/GetStartedBtn";

const RedirectBtns = () => {
    return (
        <div className="flex gap-9 py-3 items-center">
            <div className="hover:underline hover:underline-offset-2 hover:font-semibold transition-all">
                <Link to={"/auth/login"}>Login</Link>
            </div>

            <GetStartedBtn />
        </div>
    );
};

export default RedirectBtns;
