import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatObject } from "../../../utils/redux/pagesSlice";

const SingleChat = ({ data }) => {
    const { avatar, name } = data;
    const dispatch = useDispatch();
    const selectedChatObject = useSelector((state) => state.pages.chatObject);

    const handleChatClick = () => {
        dispatch(toggleChatObject(data));
    };

    console.log(avatar.url);

    return (
        <div
            className={`flex px-6 py-2 items-center gap-4 cursor-pointer w-full ${
                selectedChatObject?._id === data._id && "bg-secondary-light"
            }`}
            onClick={handleChatClick}
        >
            <div className="rounded-full w-14 h-14 overflow-hidden">
                <img src={avatar?.url} className="w-14 h-14" alt="dp" />
            </div>

            <p className="text-lg font-semibold">{name}</p>
        </div>
    );
};

export default SingleChat;
