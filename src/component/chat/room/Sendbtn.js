import React from "react";
import { send } from "./ChatData";

const Sendbtn = () => {
    return (
        <div className="flex gap-3 w-32 py-3 px-3 bg-primary-btn hover:bg-primary-btn-hover border rounded-lg justify-center items-center">
            <img src={send} alt="send" className="w-4 h-4" />
            <h1 className="text-white text-base font-semibold ">Send</h1>
        </div>
    );
};

export default Sendbtn;
