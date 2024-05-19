import React from "react";
import { useNavigate } from "react-router-dom";

const AuthBtn = ({ data }) => {
    const navigate = useNavigate();
    const handleAuth = (name) => {
        console.log(name);
        // Authenticate via `${name}`
        navigate("/chat");
    };
    return (
        <button
            onClick={handleAuth}
            className="border border-black border-opacity-20 rounded py-2 px-8 flex items-center justify-center gap-2 bg-white w-full hover:bg-secondary hover:text-white transition-all font-semibold"
        >
            <img src={data.svg} alt="icon" className="h-5 w-5" />
            <p>{data.name}</p>
        </button>
    );
};

export default AuthBtn;
