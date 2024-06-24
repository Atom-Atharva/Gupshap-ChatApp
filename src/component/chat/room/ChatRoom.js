import React, { useEffect, useState } from "react";
import { groupInfo, profileimg } from "./ChatData";
import Chattitle from "./Chattitle";
import Chatarea from "./Chatarea";
import Textsend from "./Textsend";
import GroupInfo from "./group-info/GroupInfo";
import Profile from "./profile-pic/Profile";
import { isGroup } from "./ChatData";

// Chat Area --> Messages, IsGroup
// Group Info --> groupInfo
// Profile --> Profile Img
// Chat Title --> Profile Img, Profile Name, isGroup, GroupInfo

const ChatRoom = () => {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [groupInfoVisible, setGroupInfoVisible] = useState(false);

    useEffect(() => {}, []);

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
