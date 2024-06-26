import React from "react";
import { icons } from "./notificationData";
import { ACCEPT_FRIEND_REQUEST } from "../../../utils/apis";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SingleNotification = ({ notification, onRemove }) => {
  const handleAccept = async (accept) => {
    await axios
      .post(
        ACCEPT_FRIEND_REQUEST,
        {
          accept: accept,
          sender: notification.sender._id,
          requestId: notification._id,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((response) => {
        console.log(response?.data?.message);
        toast.success(response?.data?.message, {
          position: "bottom-right",
          style: {
            fontWeight: "600",
            background: "green",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "green",
          },
        });
        onRemove(notification._id);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message, {
          position: "bottom-right",
          style: {
            fontWeight: "600",
            background: "red",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "red",
          },
        });
      });
  };
  return (
    <div className="flex justify-between py-2 px-6">
      <Toaster />
      <div className="flex items-center gap-4">
        <img
          src={notification.sender.avatar?.url}
          className="h-12 rounded-full"
          alt="DP"
        />
        <p className="text-lg font-semibold">{notification.sender.name}</p>
      </div>
      <div className="flex items-center gap-1">
        <img
          src={icons.accept}
          alt="accept"
          className="cursor-pointer"
          onClick={() => handleAccept("true")}
        />
        <img
          src={icons.reject}
          alt="reject"
          className="cursor-pointer"
          onClick={() => handleAccept("false")}
        />
      </div>
    </div>
  );
};

export default SingleNotification;
