import React from "react";
import SingleChat from "../SingleChat";

const AllGroups = ({ getMyGroups }) => {
  return getMyGroups ? (
    <div className="flex flex-col gap-2 items-start overflow-y-scroll">
      {getMyGroups.map((chat) => {
        return <SingleChat key={chat._id} data={chat} />;
      })}
    </div>
  ) : (
    <div className=" flex text-xl font-semibold h-screen w-full justify-center items-center">
      Your Groups Will Appear Here!
    </div>
  );
};

export default AllGroups;
