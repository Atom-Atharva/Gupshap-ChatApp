import React, { useEffect, useState } from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import NewGroup from "./NewGroup";
import AllGroups from "./AllGroups";
// import { getMyGroups } from "./groupData";
import axios from "axios";
import { GET_MY_GROUPS_API } from "../../../../utils/apis";

const GroupMain = () => {
    const [groups, setGroups] = useState(null);

    const getMyGroups = () => {
        axios
            .get(GET_MY_GROUPS_API, {
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
                // Sort Based on Last Updated
                response.data.data.sort(
                    (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
                );
                setGroups(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // Get My Groups API call
        getMyGroups();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Mainheading Heading="My Groups" />
            <SearchArea Search="Search Group" />
            <NewGroup />
            <AllGroups getMyGroups={groups} />
        </div>
    );
};

export default GroupMain;
