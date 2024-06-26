import React from "react";
import { icons } from "./notificationData";

const SingleNotification = ({ notification }) => {
  return (
    <div className="flex justify-between py-2 px-6">
      <div className="flex items-center gap-4">
        <img
          src={notification.sender.avatar?.url}
          className="h-12 rounded-full"
          alt="DP"
        />
        <p className="text-lg font-semibold">{notification.sender.name}</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={icons.accept} alt="accept" />
        <img src={icons.reject} alt="reject" />
      </div>
    </div>
  );
};

export default SingleNotification;
