import axios from "axios";
import React from "react";
import { SEND_FRIEND_REQUEST } from "../../../../utils/apis";
import toast, { Toaster } from "react-hot-toast";

const Singlefriend = ({ data, newperson }) => {
  const { _id, avatar, name } = data;
  // console.log(avatar);
  const handleSendRequest = async () => {
    await axios
      .post(
        SEND_FRIEND_REQUEST,
        { receiver: _id },
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
    <div
      className="flex px-6 py-2 justify-between items-center w-full cursor-pointer"
      onClick={handleSendRequest}
    >
      <Toaster />
      <div className="flex   items-center justify-end gap-4">
        <img src={avatar?.url} alt="dp" className="rounded-full h-14 w-14" />
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div>
        <img src={newperson} alt="dp" width={24} height={24} />
      </div>
    </div>
  );
};

export default Singlefriend;
