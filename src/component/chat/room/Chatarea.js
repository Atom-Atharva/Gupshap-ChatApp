import React, { useEffect, useRef, useState } from "react";
import Singlemsg from "./Singlemsg";
// import { messages } from "./ChatData";
import axios from "axios";
import { GET_MESSAGE } from "../../../utils/apis";
import { useSelector } from "react-redux";
import { useGetSocket } from "../../../utils/socket";

const Chatarea = ({ isGroup }) => {
    const [messages, setMessages] = useState([]);
    const chatId = useSelector((store) => store.pages.chatObject._id);
    const socket = useGetSocket();
    const chatContainerRef = useRef(null);

    // Chat Messages FETCH API
    const getMessage = () => {
        axios
            .get(GET_MESSAGE + chatId, {
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
                // console.log(response.data.data.messages);
                setMessages(response.data.data.messages);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        // console.log("USE EFFECT 1", chatId);

        getMessage();

        return () => {
            setMessages([]);
        };
    }, [chatId]);

    useEffect(() => {
        socket.on("NEW_MESSAGE", (data) => {
            if (data.chatID === chatId) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    data.messageForRealTime,
                ]);
            }
        });

        return () => {
            socket.off("NEW_MESSAGE");
        };
    }, [chatId]);

    // SCROLL FROM BOTTOM
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return messages.length === 0 ? (
        <div className="flex justify-center items-end py-6 h-full w-full  bg-secondary-light">
            <p className="font-semibold opacity-40">Be First To chat...</p>
        </div>
    ) : (
        <div className="flex flex-col-reverse h-full w-full bg-secondary-light overflow-hidden">
            <div
                className="overflow-auto px-10 gap-2 flex flex-col py-2"
                ref={chatContainerRef}
            >
                {messages?.map((message) => {
                    return (
                        <Singlemsg
                            message={message}
                            isGroup={isGroup}
                            key={message._id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Chatarea;
