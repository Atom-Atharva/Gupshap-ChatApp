import React from "react";
import { Link } from "react-router-dom";

const GetStartedBtn = () => {
    return (
        <Link to={"/auth/register"}>
            <div className="bg-primary-btn py-2 px-5 text-white hover:bg-primary-btn-hover rounded-md transition-all">
                Get Started
            </div>
        </Link>
    );
};

export default GetStartedBtn;
