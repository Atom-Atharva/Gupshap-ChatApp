import React from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import AllFRiends from "./AllFRiends";

const FriendMain = () => {
  return (
    <div className="flex flex-col h-screen">
      <Mainheading Heading="Add Friend" />
      <SearchArea Search="Search Friend" />
      <AllFRiends />
    </div>
  );
};

export default FriendMain;
