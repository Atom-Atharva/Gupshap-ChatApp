import React, { useEffect, useState } from "react";
import Mainheading from "./Mainheading";
import SearchArea from "./SearchArea";
import MultiChats from "./MultiChats";
import { getChatsData } from "./homeData";

const HomeMain = () => {
    // Fetch Data Here getChats
    const [mychats, setMyChats] = useState(null);

    useEffect(() => {
        // API call for get Chats
        setMyChats(getChatsData);
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
