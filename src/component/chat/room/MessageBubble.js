import React from "react";

const MessageBubble = ({ message, isSenderUser, isGroup }) => {
    return (
        <div
            className={`${
                isSenderUser ? "bg-primary-btn text-white" : "bg-primary"
            } p-4 rounded-lg ${
                isGroup ? "flex flex-col justify-center items-start gap-1" : ""
            } min-w-7 max-w-lg`}
        >
            {isGroup && (
                <div className="text-base font-semibold">
                    {isSenderUser ? "Me" : message.sender.name}
                </div>
            )}
            <div className="font-regular text-base">{message.content}</div>
        </div>
    );
};

export default MessageBubble;
