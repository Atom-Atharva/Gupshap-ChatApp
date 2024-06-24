import React, { useEffect, useState } from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import NewGroup from "./NewGroup";
import AllGroups from "./AllGroups";
import { getMyGroups } from "./groupData";

const GroupMain = () => {
    const [groups, setGroups] = useState(null);
    useEffect(() => {
        // Get My Groups API call
        setGroups(getMyGroups);
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
