import React from "react";
import SingleChat from "../singleChat";

const AllGroups = ({ getMyGroups }) => {
    return getMyGroups ? (
        getMyGroups.length === 0 ? (
            <div className="flex h-full w-full items-center justify-center font-semibold text-xl opacity-40">
                Create Group to have Group Chat.
            </div>
        ) : (
            <div className="flex flex-col gap-2 items-start overflow-y-scroll">
                {getMyGroups.map((chat) => {
                    return <SingleChat key={chat._id} data={chat} />;
                })}
            </div>
        )
    ) : (
        <div className=" flex text-xl font-semibold h-screen w-full justify-center items-center opacity-40">
            Your Groups Will Appear Here!
        </div>
    );
};

export default AllGroups;
