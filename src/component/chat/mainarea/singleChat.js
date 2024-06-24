import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatId } from "../../../utils/redux/pagesSlice";

const SingleChat = ({ data }) => {
    const { img, name } = data;
    const dispatch = useDispatch();
    const selectedChatId = useSelector((state) => state.pages.chatId);

    const handleChatClick = () => {
        dispatch(toggleChatId(data.id));
    };

    console.log(selectedChatId === data.id);

    return (
        <div
            className={`flex px-6 py-2 items-center gap-4 cursor-pointer w-full ${
                selectedChatId === data.id && "bg-secondary-light"
            }`}
            onClick={handleChatClick}
        >
            <img src={img} alt="dp" width={50} height={50} />
            <p className="text-lg font-semibold">{name}</p>
        </div>
    );
};

export default SingleChat;
