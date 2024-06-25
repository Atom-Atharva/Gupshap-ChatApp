import React from "react";
import SingleChat from "./SingleChat";

const MultiChats = ({ getChatsData }) => {
    return getChatsData ? (
        getChatsData.length === 0 ? (
            <div className="flex h-full w-full items-center justify-center font-semibold text-xl opacity-40">
                Add Friends To Chat.
            </div>
        ) : (
            <div className="flex flex-col gap-2 items-start overflow-y-scroll">
                {getChatsData.map((chat) => {
                    return <SingleChat key={chat._id} data={chat} />;
                })}
            </div>
        )
    ) : (
        <div className=" flex text-xl font-semibold h-screen w-full justify-center items-center opacity-40">
            Your Chats Will Appear Here!
        </div>
    );
};

export default MultiChats;
