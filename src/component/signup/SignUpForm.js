import React from "react";
import Form from "./Form";

const SignUpForm = () => {
    return (
        <div className="flex flex-col mt-8 items-center gap-4">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-1">Start Chatting!</h2>
                <h3 className="text-lg">Create an account</h3>
            </div>
            <Form />
        </div>
    );
};

export default SignUpForm;
