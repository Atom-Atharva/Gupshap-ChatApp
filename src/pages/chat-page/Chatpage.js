import React from "react";
import Content from "../chat-page/contents/Content.js";
import Default from "./screens/Default.js";
import NewGroup from "./screens/NewGroup.js";
import Room from "./screens/Room.js";

// Things Needed
// Chat Id --> From Redux and Fetch Data for it
// State for which is been clicked ie, newGroup, default (non-selected), Room(chatId available).

const Chatpage = () => {
    return (
        <div>
            <div className="flex w-screen">
                <Content />
                {/**
                Inside Redux
                - If Chat ID --> Room
                - If NewGroup --> NewGroup
                - If !chatId && !newGroup --> Default
                */}

                {/* <Default /> */}
                {/* <NewGroup /> */}
                <Room />
            </div>
        </div>
    );
};

export default Chatpage;
