import React from "react";
import NavBar from "./NavBar";
import MainArea from "./MainArea";
import Notification from "./Notification";

const Content = () => {
  return (
    <div className="flex">
      <NavBar />
      <MainArea />
      {/* <Notification /> */}
    </div>
  );
};

export default Content;
