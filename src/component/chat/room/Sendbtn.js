import React from "react";
import { send } from "./ChatData";
import { useGetSocket } from "../../../utils/socket";
import { useSelector } from "react-redux";

const Sendbtn = ({ text, setText }) => {
    const socket = useGetSocket();
    const chatId = useSelector((store) => store.pages.chatObject._id);

    const handleClick = () => {
        // console.log(text);

        // TODO : CONSTANTS IN Constant.js
        socket.emit("NEW_MESSAGE", {
            chatID: chatId,
            content: text,
        });

        setText("");
    };

    return (
        <div
            className="flex gap-3 w-32 py-3 px-3 bg-primary-btn hover:bg-primary-btn-hover border rounded-lg justify-center items-center"
            onClick={handleClick}
        >
            <img src={send} alt="send" className="w-4 h-4" />
            <h1 className="text-white text-base font-semibold ">Send</h1>
        </div>
    );
};

export default Sendbtn;
