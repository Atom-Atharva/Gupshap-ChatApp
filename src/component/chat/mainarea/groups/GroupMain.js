import React from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import NewGroup from "./NewGroup";

import AllGroups from "./AllGroups";

const GroupMain = () => {
  return (
    <div className="flex flex-col h-screen">
      <Mainheading Heading="My Groups" />
      <SearchArea Search="Search Group" />
      <NewGroup />
      <AllGroups />
    </div>
  );
};

export default GroupMain;
