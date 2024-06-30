import React, { useEffect, useState } from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import AllFRiends from "./AllFRiends";
import axios from "axios";
import { GET_ALL_USERS_API } from "../../../../utils/apis";

const FriendMain = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllUsers = () => {
    axios
      .get(GET_ALL_USERS_API, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        // Sort Based on Names
        response.data.data.sort((a, b) => a.name.localeCompare(b.name));
        setAllUsers(response.data.data);
        setFilteredUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (allUsers) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = allUsers.filter((user) =>
        user.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, allUsers]);

  return (
    <div className="flex flex-col h-screen">
      <Mainheading Heading="Add Friend" />
      <SearchArea Search="Search Friend" setSearchQuery={setSearchQuery} />
      <AllFRiends getAllUsers={filteredUsers} />
    </div>
  );
};

export default FriendMain;
