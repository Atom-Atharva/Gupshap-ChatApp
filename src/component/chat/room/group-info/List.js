import React from "react";
import Friend from "./Friend";

const List = ({ friends, updateInfo, setUpdateInfo }) => {
  return friends.length === 0 ? (
    <div className="flex justify-center items-center h-full w-full font-semibold opacity-40">
      Your Friends Will Appear Here!
    </div>
  ) : (
    <div className="flex flex-col h-full overflow-auto">
      {friends.map((friend) => (
        <Friend
          info={friend}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
        />
      ))}
    </div>
  );
};

export default List;
