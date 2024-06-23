import React, { useState } from "react";
import NavBar from "./NavBar";
import MainArea from "./MainArea";
import Notification from "./Notification";

const Content = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const [notification, setNotification] = useState(false);

  return (
    <div className="flex">
      <NavBar
        setActiveComponent={setActiveComponent}
        setNotification={setNotification}
        notification={notification}
        activeComponent={activeComponent}
      />
      <MainArea activeComponent={activeComponent} />

      <Notification notification={notification} />
    </div>
  );
};

export default Content;
