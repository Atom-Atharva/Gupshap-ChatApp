import React from "react";
import { adminView } from "../ChatData";
import { useSelector } from "react-redux";
import axios from "axios";
import { REMOVE_USER_API } from "../../../../utils/apis";
import toast, { Toaster } from "react-hot-toast";

const Member = ({
  info,
  isGroupAdmin,
  setMembers,
  updateInfo,
  setUpdateInfo,
}) => {
  const user = useSelector((store) => store.user);
  const chatObject = useSelector((store) => store.pages?.chatObject);
  const isMemberAdmin = info._id === user?._id;

  const handleRemoveUser = () => {
    axios
      .put(
        REMOVE_USER_API,
        {
          userId: info._id,
          chatId: chatObject._id,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(response.data.message, {
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

        setMembers(null);
        setUpdateInfo(!updateInfo);
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
    <div className="px-6 py-2 flex items-center justify-between">
      <Toaster />
      <div className="flex items-center gap-4">
        <div className="h-10 rounded-full overflow-hidden">
          <img src={info.avatar.url} className="h-10 rounded-full" alt="DP" />
        </div>

        <p className="font-semibold">{info.name}</p>
      </div>

      {isGroupAdmin && !isMemberAdmin && (
        <img
          src={adminView.removeUser}
          className="cursor-pointer"
          alt="ADD"
          onClick={handleRemoveUser}
        />
      )}
    </div>
  );
};

export default Member;
