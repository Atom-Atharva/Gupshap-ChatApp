import React from "react";
import MessageBubble from "./MessageBubble";
import { useSelector } from "react-redux";

const Singlemsg = ({ message, isGroup }) => {
    const user = useSelector((store) => store.user);
    const isSenderUser = message?.sender?.name === user?.name;
    // console.log(message.sender.name, user.name);

    return (
        <div
            className={`${
                isSenderUser ? "justify-end" : "justify-start"
            } flex items-center`}
        >
            <MessageBubble
                message={message}
                isSenderUser={isSenderUser}
                isGroup={isGroup}
            />
        </div>
    );
};

export default Singlemsg;
