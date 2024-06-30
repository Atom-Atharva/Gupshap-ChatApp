import React, { useEffect, useState } from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import NewGroup from "./NewGroup";
import AllGroups from "./AllGroups";
import axios from "axios";
import { GET_MY_GROUPS_API } from "../../../../utils/apis";
import { useSelector } from "react-redux";

const GroupMain = () => {
  const [groups, setGroups] = useState(null);
  const [filteredGroups, setFilteredGroups] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const Flag = useSelector((state) => state.grouptrig.Flag);

  const getMyGroups = () => {
    axios
      .get(GET_MY_GROUPS_API, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        response.data.data.sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
        );
        setGroups(response.data.data);
        setFilteredGroups(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMyGroups();
  }, [Flag]);

  useEffect(() => {
    if (groups) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = groups.filter((group) =>
        group.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredGroups(filtered);
    }
  }, [searchQuery, groups]);

  return (
    <div className="flex flex-col h-screen">
      <Mainheading Heading="My Groups" />
      <SearchArea Search="Search Group" setSearchQuery={setSearchQuery} />
      <NewGroup />
      <AllGroups getMyGroups={filteredGroups} />
    </div>
  );
};

export default GroupMain;
