import React from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "../../common/GetStartedBtn";

const RedirectBtns = () => {
    return (
        <div className="flex gap-9 py-3 items-center">
            <div className="relative group">
                <Link
                    to="/auth/login"
                    className="transition-all group-hover:font-bold"
                >
                    Login
                </Link>
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-in-out"></span>
            </div>

            <GetStartedBtn />
        </div>
    );
};

export default RedirectBtns;
