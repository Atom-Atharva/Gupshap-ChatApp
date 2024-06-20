import React from "react";
import MessageBubble from "./MessageBubble";

const Singlemsg = ({ message, index, isGroup }) => {
  const isSenderUser = message.senderName === "Atharva Sugandhi";

  return (
    <div
      key={index}
      className={`${
        isSenderUser ? "justify-end" : "justify-start"
      } flex items-center`}
    >
      <MessageBubble
        message={message}
        isSenderUser={isSenderUser}
        isGroup={isGroup}
      />
    </div>
  );
};

export default Singlemsg;
