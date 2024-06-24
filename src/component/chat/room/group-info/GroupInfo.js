import React from "react";
import Member from "./Member";
import AddUsers from "./AddUsers";
import { group, groupContaints } from "../ChatData";

const GroupInfo = ({ info, setGroupInfoVisible, groupInfoVisible }) => {
    return (
        <div className="absolute top-8 left-10 bg-white flex flex-col max-h-[95vh] w-96 gap-4 p-5 border border-black border-opacity-20 rounded-lg shadow-lg">
            <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setGroupInfoVisible(!groupInfoVisible)}
            >
                <img src={group.cut} className="h-6" alt="X" />
            </div>

            <div className="flex flex-col gap-3 justify-center">
                <div className="flex justify-center">
                    <img src={info.image} className="h-32 w-32" alt="DP" />
                </div>

                <p className="text-center font-bold text-2xl">{info.name}</p>
            </div>

            <div className="flex gap-3 items-center">
                <p className="font-semibold text-lg">
                    {groupContaints.createdByHeading}
                </p>
                <p>{info.createdBy}</p>
            </div>

            <div className="mr-1">
                <p className="font-semibold text-lg">
                    {groupContaints.groupMembersHeading}
                </p>
                {info.isGroupAdmin && (
                    <div>
                        <AddUsers />
                    </div>
                )}
                <div className="h-56 overflow-auto">
                    {info.members.map((member) => {
                        return (
                            <Member
                                key={member.id}
                                info={member}
                                isGroupAdmin={info.isGroupAdmin}
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
