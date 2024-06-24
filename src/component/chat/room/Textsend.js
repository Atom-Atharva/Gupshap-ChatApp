import React from "react";
import { sendattach, text } from "./TextsendData";
import Sendbtn from "./Sendbtn";

const Textsend = () => {
    return (
        <div className="flex py-3 px-5 justify-between items-center gap-4 border-t border-black-opacity-20 ">
            <img src={sendattach} alt="sendattach" className="w-8 h-8" />
            <input
                className="border border-black-opacity-20 w-11/12 py-2 px-4 "
                placeholder={text}
            ></input>
            <Sendbtn />
        </div>
    );
};

export default Textsend;
