import React, { useEffect, useState } from "react";
import Content from "../chat-page/contents/Content.js";
import Default from "./screens/Default.js";
import NewGroup from "./screens/NewGroup.js";
import Room from "./screens/Room.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_PROFILE_API } from "../../utils/apis.js";
import { addUser } from "../../utils/redux/userSlice.js";
import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
import { useGetSocket } from "../../utils/socket.js";

// Things Needed
// Chat Id --> From Redux and Fetch Data for it
// State for which is been clicked ie, newGroup, default (non-selected), Room(chatId available).

const Chatpage = () => {
    const dispatch = useDispatch();
    const pages = useSelector((store) => store.pages);
    const { chatObject, newGroup } = pages;
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    // GET MY SOCKET
    const socket = useGetSocket();
    
    const getUserData = () => {
        // FETCH USER INFO IF NOT AVAILABLE
        // If NOT FETCHABLE then REDIRECT TO LOGIN
        axios
            .get(GET_PROFILE_API, {
                credentials: "include",
                withCredentials: true,
            })
            .then((response) => {
                dispatch(addUser(response.data.data));
            })
            .catch((error) => {
                console.log(error);
                navigate("/auth/login");
            });
    };

    useEffect(() => {
        !user && getUserData();

        //* CHECK socket.js in utils to understand how socket is been flowed in chatpage
        if (socket) {
            socket.on("connect", () => {
                console.log("SOCKET CONNECTED WITH: ", socket.id);
            });
        }

        return () => {
            if (socket) {
                socket.on("disconnect", () => {
                    console.log("Disconnected FROM SOCKET");
                });
                socket.disconnect();
            }
        };
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

                {chatObject ? (
                    <Room chatObject={chatObject} />
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
