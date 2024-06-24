import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatId } from "../../../utils/redux/pagesSlice";

const SingleChat = ({ data }) => {
    const { avatar, name } = data;
    const dispatch = useDispatch();
    const selectedChatId = useSelector((state) => state.pages.chatId);

    const handleChatClick = () => {
        dispatch(toggleChatId(data._id));
    };

    console.log(selectedChatId === data._id);

    return (
        <div
            className={`flex px-6 py-2 items-center gap-4 cursor-pointer w-full ${
                selectedChatId === data._id && "bg-secondary-light"
            }`}
            onClick={handleChatClick}
        >
            <img src={avatar} alt="dp" width={50} height={50} />
            <p className="text-lg font-semibold">{name}</p>
        </div>
    );
};

export default SingleChat;
