import React from "react";
import { messages } from "./ChatData";
import Singlemsg from "./Singlemsg";

const Chatarea = () => {
  return (
    <div className=" flex flex-col h-[580px] gap-2 px-10 overflow-y-auto  bg-secondary-light ">
      {messages.map((message, index) => {
        return <Singlemsg message={message} index={index} />;
      })}
    </div>
  );
};

export default Chatarea;
