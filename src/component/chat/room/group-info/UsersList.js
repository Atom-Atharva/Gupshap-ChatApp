import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import { GET_MY_FRIENDS_API } from "../../../../utils/apis";

const UsersList = ({ setAddMemberVisible, updateInfo, setUpdateInfo }) => {
  const [friends, setFriends] = useState([]);

  const getMyFriends = () => {
    axios
      .get(GET_MY_FRIENDS_API, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        // Sort Based on Names
        response.data.data.sort((a, b) => a.name.localeCompare(b.name));
        setFriends(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMyFriends();
  }, []);

  return (
    <div className="absolute h-full w-full flex justify-center items-center bg-black-opacity-40">
      <div className="bg-white rounded-lg w-96 relative">
        <div className="font-semibold text-2xl border-b px-4 py-2 border-black-opacity-40 flex justify-between">
          <div>Add Members</div>
          <div
            onClick={() => setAddMemberVisible(false)}
            className="cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="h-96 w-full">
          <List
            friends={friends}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
