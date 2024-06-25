import React from "react";
import SingleChat from "./SingleChat";

const MultiChats = ({ getChatsData }) => {
    return getChatsData ? (
        <div className="flex flex-col gap-2 items-start overflow-y-scroll">
            {getChatsData.map((chat) => {
                return <SingleChat key={chat._id} data={chat} />;
            })}
        </div>
    ) : (
        <div className=" flex text-xl font-semibold h-screen w-full justify-center items-center">
            Your Chats Will Appear Here!
        </div>
    );
};

export default MultiChats;
