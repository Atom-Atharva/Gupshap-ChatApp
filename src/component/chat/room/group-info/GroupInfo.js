import React from "react";
import Member from "./Member";
import AddUsers from "./AddUsers";
import { groupContaints } from "../ChatData";

const GroupInfo = ({ info }) => {
    return (
        <div className="absolute top-8 left-10 bg-white flex flex-col w-96 gap-4 p-5 justify-center border border-black border-opacity-20 rounded-lg shadow-lg">
            <div className="flex flex-col gap-3 items-stretch justify-center">
                <div className="flex justify-center">
                    <img src={info.image} className="h-40 w-40" alt="DP" />
                </div>

                <p className="text-center font-bold text-3xl">{info.name}</p>
            </div>

            <div className="max-h-80 overflow-auto flex flex-col gap-3">
                <div>
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
                    <div className="h-64 overflow-auto">
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
