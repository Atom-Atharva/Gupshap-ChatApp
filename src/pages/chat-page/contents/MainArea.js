import React from "react";
import Mainheading from "../../../component/chat/mainarea/Mainheading";
import SearchArea from "../../../component/chat/mainarea/SearchArea";
import MultiChats from "../../../component/chat/mainarea/MultiChats";

const MainArea = () => {
  return (
    <div>
      <div className="flex flex-col h-screen  border-r-2 border-black-opacity-20">
        <Mainheading />
        <SearchArea />
        <MultiChats />
      </div>
    </div>
  );
};

export default MainArea;
