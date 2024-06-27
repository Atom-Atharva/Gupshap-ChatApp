import React, { useEffect, useState } from "react";
import Mainheading from "../Mainheading";
import SearchArea from "../SearchArea";
import AllFRiends from "./AllFRiends";
// import { getAllUsers } from "./addFriendData";
import axios from "axios";
import { GET_ALL_USERS_API } from "../../../../utils/apis";

const FriendMain = () => {
    const [allUsers, setAllUsers] = useState(null);

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
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // API CALL TO GET ALL USERS
        getAllUsers();
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
