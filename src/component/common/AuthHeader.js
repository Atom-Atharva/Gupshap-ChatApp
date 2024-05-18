import React from "react";
import { authHeader } from "../signup/signupData";
import { Link } from "react-router-dom";

const AuthHeader = ({ isLogin }) => {
    const { brandName, login, signup } = authHeader;

    return (
        <div className="flex justify-between px-20 py-4 items-center">
            <img src={brandName} alt="BrandName" className="h-16" />
            {isLogin ? (
                <p>
                    {login}
                    <span className="relative group">
                        <Link
                            to="/auth/register"
                            className="text-secondary hover:font-bold font-semibold transition-all"
                        >
                            SignUp
                        </Link>
                        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-in-out"></span>
                    </span>
                </p>
            ) : (
                <p>
                    {signup}
                    <span className="relative group">
                        <Link
                            to="/auth/login"
                            className="text-secondary hover:font-bold font-semibold transition-all"
                        >
                            SignIn
                        </Link>
                        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-in-out"></span>
                    </span>
                </p>
            )}
        </div>
    );
};

export default AuthHeader;
