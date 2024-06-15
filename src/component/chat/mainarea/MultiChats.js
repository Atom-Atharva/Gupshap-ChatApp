import React from "react";
import { multiChatData } from "./multiChatData";
import SingleChat from "./singleChat";

const MultiChats = () => {
  return (
    <div className="flex flex-col gap-5 items-start overflow-y-auto">
      {multiChatData.map((chat) => {
        return <SingleChat key={chat.id} data={chat} />;
      })}
    </div>
  );
};

export default MultiChats;
