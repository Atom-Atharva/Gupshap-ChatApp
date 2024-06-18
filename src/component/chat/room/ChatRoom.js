import React from "react";
import { profileName, profileimg } from "./ChatData";
import Chattitle from "./Chattitle";
import Chatarea from "./Chatarea";
import Textsend from "./Textsend";

const ChatRoom = () => {
  return (
    <div className="flex flex-col  ">
      <Chattitle />
      <Chatarea />
      <Textsend />
    </div>
  );
};

export default ChatRoom;
