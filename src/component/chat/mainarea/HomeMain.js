import React, { useEffect, useState } from "react";
import Mainheading from "./Mainheading";
import SearchArea from "./SearchArea";
import MultiChats from "./MultiChats";
// import { getChatsData } from "./homeData";
import axios from "axios";
import { GET_MY_CHATS_API } from "../../../utils/apis";

const HomeMain = () => {
    // Fetch Data Here getChats
    const [mychats, setMyChats] = useState(null);

    const getChats = () => {
        axios
            .get(GET_MY_CHATS_API, {
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
                setMyChats(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // API call for get Chats
        getChats();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Mainheading Heading="Home" />
            <SearchArea Search="Search Friend" />
            <MultiChats getChatsData={mychats} />
        </div>
    );
};

export default HomeMain;
