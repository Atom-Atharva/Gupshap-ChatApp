import React, { useEffect, useState } from "react";
import Mainheading from "./Mainheading";
import SearchArea from "./SearchArea";
import MultiChats from "./MultiChats";
import axios from "axios";
import { GET_MY_CHATS_API } from "../../../utils/apis";
import { useSelector } from "react-redux";

const HomeMain = () => {
  const [mychats, setMyChats] = useState(null);
  const [filteredChats, setFilteredChats] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const updateFlag = useSelector((state) => state.trigger.updateFlag);

  const getChats = () => {
    axios
      .get(GET_MY_CHATS_API, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        response.data.data.sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
        );
        setMyChats(response.data.data);
        setFilteredChats(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getChats();
  }, [updateFlag]);

  useEffect(() => {
    if (mychats) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = mychats.filter((chat) =>
        chat.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredChats(filtered);
    }
  }, [searchQuery, mychats]);

  return (
    <div className="flex flex-col h-screen">
      <Mainheading Heading="Home" />
      <SearchArea Search="Search Friend" setSearchQuery={setSearchQuery} />
      <MultiChats getChatsData={filteredChats} />
    </div>
  );
};

export default HomeMain;
