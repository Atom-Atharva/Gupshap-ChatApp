import React from "react";
import Mainheading from "../../../component/chat/mainarea/Mainheading";
import SearchArea from "../../../component/chat/mainarea/SearchArea";
import MultiChats from "../../../component/chat/mainarea/MultiChats";

import Profdetail from "../../../component/chat/mainarea/profile/Profdetail";
import GroupMain from "../../../component/chat/mainarea/groups/GroupMain";

const MainArea = () => {
  return (
    <div>
      <div className="flex flex-col h-screen  border-r-2 border-black-opacity-20 ">
        {/* <Mainheading Heading="Home" />
        <SearchArea Search="Search Friends" />
        <MultiChats /> */}
        {/* <Profdetail /> */}
        <GroupMain />
      </div>
    </div>
  );
};

export default MainArea;
