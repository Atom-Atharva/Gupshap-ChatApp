import React from "react";
import { messageData } from "./heroData";

const ChatBox = () => {
    const { name, msg, img ,link } = messageData;
    return (
        <div className="bg-white py-3 px-4 drop-shadow-lg rounded-lg">
            <a href={link}>
                <div className="flex gap-4 items-center mb-2">
                    <img src={img} alt="dp" width={33} height={33} />
                    <div className="font-semibold text-sm">{name}</div>
                </div>
            </a>

            <div className="text-sm">{msg}</div>
        </div>
    );
};

export default ChatBox;
