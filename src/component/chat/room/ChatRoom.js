import React, { useState } from "react";
import { groupInfo, profileimg } from "./ChatData";
import Chattitle from "./Chattitle";
import Chatarea from "./Chatarea";
import Textsend from "./Textsend";
import GroupInfo from "./group-info/GroupInfo";
import Profile from "./profile-pic/Profile";
import { isGroup } from "./ChatData";

const ChatRoom = () => {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [groupInfoVisible, setGroupInfoVisible] = useState(false);

    return (
        <div className="flex flex-col h-full relative">
            {isGroup && groupInfoVisible && (
                <GroupInfo
                    info={groupInfo}
                    setGroupInfoVisible={setGroupInfoVisible}
                    groupInfoVisible={groupInfoVisible}
                />
            )}

            {!isGroup && isProfileVisible && (
                <Profile
                    img={profileimg}
                    setIsProfileVisible={setIsProfileVisible}
                />
            )}
            <Chattitle
                setIsProfileVisible={setIsProfileVisible}
                setGroupInfoVisible={setGroupInfoVisible}
                groupInfoVisible={groupInfoVisible}
            />
            <Chatarea />
            <Textsend />
        </div>
    );
};

export default ChatRoom;
