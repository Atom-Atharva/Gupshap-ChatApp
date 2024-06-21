import React from "react";
import { multiChatData } from "./GroupChatsData";
import SingleChat from "../singleChat";

const AllGroups = () => {
  return (
    <div className="flex flex-col gap-5 items-start overflow-y-scroll">
      {multiChatData.map((chat, index) => {
        return <SingleChat key={index} data={chat} />;
      })}
    </div>
  );
};

export default AllGroups;
