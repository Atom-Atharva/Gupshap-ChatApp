import React from "react";
import NavUp from "../../../component/chat/navbar/NavUp";
import NavDown from "../../../component/chat/navbar/NavDown";

const NavBar = ({
  setActiveComponent,
  setNotification,
  notification,
  activeComponent,
}) => {
  return (
    <div className="flex flex-col justify-between py-4 h-screen bg-secondary-light border-r border-black-opacity-20">
      <NavUp
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
      />
      <NavDown
        setActiveComponent={setActiveComponent}
        setNotification={setNotification}
        notification={notification}
        activeComponent={activeComponent}
      />
    </div>
  );
};

export default NavBar;
