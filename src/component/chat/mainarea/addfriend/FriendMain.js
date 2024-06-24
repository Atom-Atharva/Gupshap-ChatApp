import React, { useEffect, useState } from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import AllFRiends from "./AllFRiends";
import { getAllUsers } from "./addFriendData";

const FriendMain = () => {
    const [allUsers, setAllUsers] = useState(null);
    useEffect(() => {
        // API CALL TO GET ALL USERS
        setAllUsers(getAllUsers);
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Mainheading Heading="Add Friend" />
            <SearchArea Search="Search Friend" />
            <AllFRiends getAllUsers={allUsers} />
        </div>
    );
};

export default FriendMain;
