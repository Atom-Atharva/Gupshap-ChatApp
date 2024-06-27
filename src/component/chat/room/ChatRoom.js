import React, { useEffect, useState } from "react";
import Chattitle from "./Chattitle";
import Chatarea from "./Chatarea";
import Textsend from "./Textsend";
import GroupInfo from "./group-info/GroupInfo";
import Profile from "./profile-pic/Profile";
import UsersList from "./group-info/UsersList";

// TODOs: Chat Area --> Messages

const ChatRoom = ({ chatInfo }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [groupInfoVisible, setGroupInfoVisible] = useState(false);
  const [addMemberVisible, setAddMemberVisible] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(false);

  const { groupChat, members } = chatInfo;
  const profileimg = members[0]?.avatar?.url;

  // TODO: CHAT FETCH API
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-full relative">
      {groupChat && groupInfoVisible && (
        <div>
          <GroupInfo
            info={chatInfo}
            setGroupInfoVisible={setGroupInfoVisible}
            groupInfoVisible={groupInfoVisible}
            setAddMemberVisible={setAddMemberVisible}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
          />
          {addMemberVisible && (
            <UsersList
              setAddMemberVisible={setAddMemberVisible}
              updateInfo={updateInfo}
              setUpdateInfo={setUpdateInfo}
            />
          )}
        </div>
      )}

      {!groupChat && isProfileVisible && (
        <Profile img={profileimg} setIsProfileVisible={setIsProfileVisible} />
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
