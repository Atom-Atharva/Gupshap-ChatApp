import React, { useEffect, useState } from "react";
import Member from "./Member";
import AddUsers from "./AddUsers";
import { group, groupContaints } from "../ChatData";
import { useDispatch, useSelector } from "react-redux";
import { LEAVE_GROUP_API } from "../../../../utils/apis";
import axios from "axios";
import { GET_CHAT_INFO } from "../../../../utils/apis";
import toast, { Toaster } from "react-hot-toast";
import { toggleChatObject } from "../../../../utils/redux/pagesSlice";

const GroupInfo = ({ info, setGroupInfoVisible, groupInfoVisible }) => {
    const user = useSelector((store) => store.user);
    const isGroupAdmin = info.creator._id === user?._id;
    const chatId = useSelector((store) => store?.pages?.chatObject?._id);
    const [creator, setCreator] = useState(null);
    const [members, setMembers] = useState(null);
    const [updateInfo, setUpdateInfo] = useState(false);
    const dispatch = useDispatch();

    const leaveHandler = async () => {
        await axios
            .delete(LEAVE_GROUP_API + info._id, {
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
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
                dispatch(toggleChatObject(null));
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

    const getChatInfo = () => {
        axios
            .get(GET_CHAT_INFO + chatId, {
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
                console.log(response);
                setMembers(response?.data?.data?.members);
                setCreator(response?.data?.data?.creator);
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

    // GET GROUP INFO
    useEffect(() => {
        getChatInfo();
    }, [updateInfo]);

    return (
        <div className="absolute top-8 left-10 bg-white flex flex-col max-h-[95vh] w-96 gap-4 p-5 border border-black border-opacity-20 rounded-lg shadow-lg">
            <Toaster />
            <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setGroupInfoVisible(!groupInfoVisible)}
            >
                <img src={group.cut} className="h-6" alt="X" />
            </div>

            <div className="flex flex-col gap-3 justify-center">
                <div className="flex justify-center overflow-hidden rounded-full">
                    <img
                        src={info.avatar.url}
                        className="h-32 w-32 rounded-full"
                        alt="DP"
                    />
                </div>

                <p className="text-center font-bold text-2xl">{info.name}</p>
            </div>

            <div className="flex gap-3 items-center">
                <p className="font-semibold text-lg">
                    {groupContaints.createdByHeading}
                </p>
                <p className="font-semibold">{creator?.name}</p>
            </div>

            <div className="mr-1">
                <p className="font-semibold text-lg">
                    {groupContaints.groupMembersHeading}
                </p>
                {isGroupAdmin && (
                    <div>
                        <AddUsers />
                    </div>
                )}
                <div className="h-56 overflow-auto">
                    {members ? (
                        members.map((member) => {
                            return (
                                <Member
                                    key={member._id}
                                    info={member}
                                    isGroupAdmin={isGroupAdmin}
                                    setMembers={setMembers}
                                    setUpdateInfo={setUpdateInfo}
                                    updateInfo={updateInfo}
                                />
                            );
                        })
                    ) : (
                        <div className="h-56 overflow-auto font-semibold w-full text-center">
                            Loading...
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center border-0 border-t-2 pt-2">
                <button
                    className="w-11/12  py-2 rounded-lg bg-error hover:bg-error-hover text-white font-semibold"
                    onClick={leaveHandler}
                >
                    {groupContaints.leaveGroup}
                </button>
            </div>
        </div>
    );
};

export default GroupInfo;
