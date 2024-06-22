import React from "react";
import { groupInfo, profileimg } from "./ChatData";
import Chattitle from "./Chattitle";
import Chatarea from "./Chatarea";
import Textsend from "./Textsend";
import GroupInfo from "./group-info/GroupInfo";
import Profile from "./profile-pic/Profile";

const ChatRoom = () => {
    return (
        <div className="flex flex-col h-full relative">
            {/* <GroupInfo info={groupInfo} /> */}
            {/* <Profile img={profileimg} /> */}
            <Chattitle />
            <Chatarea />
            <Textsend />
        </div>
    );
};

export default ChatRoom;
