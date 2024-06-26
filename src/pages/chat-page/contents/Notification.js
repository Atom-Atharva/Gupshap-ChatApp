import React, { useEffect, useState } from "react";
import Header from "../../../component/chat/notification/Header";
import List from "../../../component/chat/notification/List";
import { notifications } from "../../../component/chat/notification/notificationData";
import { GET_MY_NOTIFICATIONS } from "../../../utils/apis";
import axios from "axios";

const Notification = ({ setNotification, notification }) => {
  const [notifications, setNotifications] = useState(null);
  const getNotifications = () => {
    axios
      .get(GET_MY_NOTIFICATIONS, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log(response.data.data);
        setNotifications(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // API call for get Chats
    getNotifications();
  }, []);

  return (
    <div className="absolute bottom-28 left-9 w-96 max-h-96 p-5 flex flex-col gap-5 border border-black rounded-lg border-opacity-20 bg-secondary-light shadow-xl">
      <Header
        notification={notification}
        setNotification={setNotification}
        count={notifications?.length}
      />
      <List data={notifications} />
    </div>
  );
};

export default Notification;
