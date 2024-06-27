import React from "react";
import Friend from "./Friend";

const List = ({ friends }) => {
    return friends.length === 0 ? (
        <div className="flex justify-center items-center h-full w-full font-semibold opacity-40">
            Your Friends Will Appear Here!
        </div>
    ) : (
        <div className="flex flex-col h-full overflow-auto">
            {friends.map((friend) => (
                <Friend info={friend} />
            ))}
        </div>
    );
};

export default List;
