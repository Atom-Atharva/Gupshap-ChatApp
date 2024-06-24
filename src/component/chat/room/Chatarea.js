import React from "react";
import { messages } from "./ChatData";
import Singlemsg from "./Singlemsg";

const Chatarea = ({ isGroup }) => {
    return (
        <div className=" flex flex-col h-full gap-2 px-10 overflow-y-auto bg-secondary-light py-2">
            {messages.map((message, index) => {
                return (
                    <Singlemsg
                        message={message}
                        isGroup={isGroup}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Chatarea;
