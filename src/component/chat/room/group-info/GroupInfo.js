import React, { useState } from "react";
import Member from "./Member";
import AddUsers from "./AddUsers";
import { group, groupContaints } from "../ChatData";
import { useSelector } from "react-redux";

const GroupInfo = ({ info, setGroupInfoVisible, groupInfoVisible }) => {
    const user = useSelector((store) => store.user);
    const isGroupAdmin = info.creator._id === user?._id;
    const [members, setMembers] = useState(info?.members || null);

    return (
        <div className="absolute top-8 left-10 bg-white flex flex-col max-h-[95vh] w-96 gap-4 p-5 border border-black border-opacity-20 rounded-lg shadow-lg">
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
                <p className="font-semibold">{info.creator.name}</p>
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
                    {members.map((member) => {
                        return (
                            <Member
                                key={member._id}
                                info={member}
                                isGroupAdmin={isGroupAdmin}
                                setMembers={setMembers}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-center border-0 border-t-2 pt-2">
                <button className="w-11/12  py-2 rounded-lg bg-error hover:bg-error-hover text-white font-semibold">
                    {groupContaints.leaveGroup}
                </button>
            </div>
        </div>
    );
};

export default GroupInfo;
