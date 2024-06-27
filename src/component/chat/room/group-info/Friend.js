import React from "react";
import { adminView } from "../ChatData";
import { ADD_MEMBER } from "../../../../utils/apis";
import { useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Friend = ({ info, updateInfo, setUpdateInfo }) => {
    const chatId = useSelector((store) => store?.pages?.chatObject?._id);
    const handleaddUser = async () => {
        axios
            .put(
                ADD_MEMBER,
                {
                    chatId: chatId,
                    member: info._id,
                },
                {
                    withCredentials: true,
                    credentials: "include",
                }
            )
            .then((response) => {
                console.log(response);
                setUpdateInfo(!updateInfo);
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
            className="w-full flex justify-between px-6 py-2 items-center cursor-pointer"
            onClick={handleaddUser}
        >
            <Toaster />
            <div className="flex gap-3 items-center">
                <img
                    src={info?.avatar?.url}
                    className="h-12 w-12 rounded-full"
                    alt="DP"
                />

                <div className="font-semibold">{info.name}</div>
            </div>
            <img
                src={adminView.addUser}
                className="h-6 w-6 rounded-full"
                alt="DP"
            />
        </div>
    );
};

export default Friend;
