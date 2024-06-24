import React from "react";
import { multiChatData } from "./GroupChatsData";
import SingleChat from "../SingleChat";

const AllGroups = () => {
    return (
        <div className="flex flex-col gap-1 items-start overflow-y-scroll">
            {multiChatData.map((chat) => {
                return <SingleChat key={chat.id} data={chat} />;
            })}
        </div>
    );
};

export default AllGroups;
