import React from "react";
import Member from "./Member";
import AddUsers from "./AddUsers";

const GroupInfo = ({ info }) => {
    return (
        <div className="absolute top-8 left-10 bg-white flex flex-col gap-4 p-5 justify-center border border-black border-opacity-20 rounded-lg shadow-lg">
            <div className="flex flex-col gap-3 w-96 justify-center">
                <div className="flex justify-center">
                    <img src={info.image} className="h-40 w-40" alt="DP" />
                </div>

                <p className="text-center font-bold text-3xl">{info.name}</p>
            </div>

            <div>
                <p className="font-semibold text-lg">{info.createdByHeading}</p>
                <p>{info.createdBy}</p>
            </div>

            <div className="m-1">
                <p className="font-semibold text-lg">
                    {info.groupMembersHeading}
                </p>
                {info.isGroupAdmin ? (
                    <div>
                        <AddUsers />
                    </div>
                ) : (
                    <></>
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
    );
};

export default GroupInfo;
