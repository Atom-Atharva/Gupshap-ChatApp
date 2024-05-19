import React, { useState } from "react";
import InputBox from "../../common/InputBox";
import SignInUpBtn from "../../common/SignInUpBtn";
import { useNavigate } from "react-router-dom";

function MyForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(email, password);

        // Backend Handle

        navigate("/chat");
    };

    return (
        <form
            className="flex flex-col gap-6 justify-center items-center px-20 py-10"
            onSubmit={handleLogin}
        >
            <InputBox
                placeholder="Email*"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
                placeholder="Password*"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <SignInUpBtn signIn={true} />
        </form>
    );
}

export default MyForm;
