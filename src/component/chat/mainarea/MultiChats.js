import React from "react";
import { multiChatData } from "./multiChatData";
import SingleChat from "./SingleChat";

const MultiChats = () => {
    return (
        <div className="flex flex-col gap-2 items-start overflow-y-scroll">
            {multiChatData.map((chat, index) => {
                return <SingleChat key={index} data={chat} />;
            })}
        </div>
    );
};

export default MultiChats;
