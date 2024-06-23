import React from "react";
import Profdetail from "../../../component/chat/mainarea/profile/Profdetail";
import GroupMain from "../../../component/chat/mainarea/groups/GroupMain";
import FriendMain from "../../../component/chat/mainarea/addfriend/FriendMain";
import HomeMain from "../../../component/chat/mainarea/HomeMain";

const MainArea = ({ activeComponent }) => {
  return (
    <div className="flex flex-col h-screen border-r-2 border-black-opacity-20">
      {activeComponent === "home" && <HomeMain />}
      {activeComponent === "groups" && <GroupMain />}
      {activeComponent === "addfriend" && <FriendMain />}
      {activeComponent === "profile" && <Profdetail />}
    </div>
  );
};

export default MainArea;
