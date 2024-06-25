import React from "react";
import { newperson } from "./addFriendData";

import Singlefriend from "./Singlefriend";

const AllFRiends = ({ getAllUsers }) => {
    return getAllUsers ? (
        getAllUsers.length === 0 ? (
            <div className="flex h-full w-full items-center justify-center font-semibold text-xl opacity-40">
                We are alone Fellow Developer :)
            </div>
        ) : (
            <div className="flex flex-col gap-2 items-start overflow-y-scroll">
                {getAllUsers.map((chat) => {
                    return (
                        <Singlefriend
                            key={chat._id}
                            data={chat}
                            newperson={newperson}
                        />
                    );
                })}
            </div>
        )
    ) : (
        <div className=" flex text-xl font-semibold h-screen w-full justify-center items-center opacity-40">
            All Users Will Appear Here!
        </div>
    );
};

export default AllFRiends;
