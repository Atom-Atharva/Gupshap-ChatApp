import React from "react";
import Mainheading from "./Mainheading";
import SearchArea from "./SearchArea";
import MultiChats from "./MultiChats";

const HomeMain = () => {
  return (
    <div className="flex flex-col h-screen">
      <Mainheading Heading="Home" />
      <SearchArea Search="Search Friend" />
      <MultiChats />
    </div>
  );
};

export default HomeMain;
