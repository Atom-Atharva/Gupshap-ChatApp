import React from "react";

const SignInUpBtn = ({ signIn }) => {
    return (
        <button className="bg-primary-btn hover:bg-primary-btn-hover transition-all text-white px-5 py-3 w-full text-center font-semibold rounded">
            {signIn ? "Login" : "Sign Up"}
        </button>
    );
};

export default SignInUpBtn;
