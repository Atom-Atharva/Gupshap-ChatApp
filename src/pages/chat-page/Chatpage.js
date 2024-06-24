import React, { useEffect } from "react";
import Content from "../chat-page/contents/Content.js";
import Default from "./screens/Default.js";
import NewGroup from "./screens/NewGroup.js";
import Room from "./screens/Room.js";
import { useDispatch, useSelector } from "react-redux";

// Things Needed
// Chat Id --> From Redux and Fetch Data for it
// State for which is been clicked ie, newGroup, default (non-selected), Room(chatId available).

const Chatpage = () => {
    const dispatch = useDispatch();
    const pages = useSelector((store) => store.pages);
    const { chatId, newGroup } = pages;

    useEffect(() => {
        // TODOs
        // FETCH USER INFO IF NOT AVAILABLE
        // If NOT FETCHABLE then REDIRECT TO LOGIN
    }, []);

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
                {chatId ? (
                    <Room chatId={chatId} />
                ) : newGroup ? (
                    <NewGroup />
                ) : (
                    <Default />
                )}
            </div>
        </div>
    );
};

export default Chatpage;
