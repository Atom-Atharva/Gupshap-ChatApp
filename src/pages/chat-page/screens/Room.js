import React from "react";
import ChatRoom from "../../../component/chat/room/ChatRoom";

const Room = ({ chatObject }) => {
    return (
        <div className="flex flex-col flex-1 h-screen">
            <ChatRoom chatInfo={chatObject} />
        </div>
    );
};

export default Room;
