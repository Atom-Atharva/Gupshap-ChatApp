import React, { useEffect, useState } from "react";
import Chattitle from "./Chattitle";
import Chatarea from "./Chatarea";
import Textsend from "./Textsend";
import GroupInfo from "./group-info/GroupInfo";
import Profile from "./profile-pic/Profile";

// TODOs: Chat Area --> Messages

const ChatRoom = ({ chatInfo }) => {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [groupInfoVisible, setGroupInfoVisible] = useState(false);

    const { groupChat, members } = chatInfo;
    const profileimg = members[0]?.avatar?.url;

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col h-full relative">
            {groupChat && groupInfoVisible && (
                <GroupInfo
                    info={chatInfo}
                    setGroupInfoVisible={setGroupInfoVisible}
                    groupInfoVisible={groupInfoVisible}
                />
            )}

            {!groupChat && isProfileVisible && (
                <Profile
                    img={profileimg}
                    setIsProfileVisible={setIsProfileVisible}
                />
            )}
            <Chattitle
                setIsProfileVisible={setIsProfileVisible}
                setGroupInfoVisible={setGroupInfoVisible}
                groupInfoVisible={groupInfoVisible}
                isGroup={groupChat}
                info={chatInfo}
            />
            <Chatarea isGroup={groupChat} />
            <Textsend />
        </div>
    );
};

export default ChatRoom;
