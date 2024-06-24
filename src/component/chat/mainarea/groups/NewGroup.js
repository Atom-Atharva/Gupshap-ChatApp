import React from "react";
import { useDispatch } from "react-redux";
import { toggleNewGroup } from "../../../../utils/redux/pagesSlice";
import { newGroup } from "./groupData";

const NewGroup = () => {
    const dispatch = useDispatch();

    const newGroupHandler = () => {
        dispatch(toggleNewGroup());
    };

    return (
        <div
            className="flex px-6 py-2 items-center gap-4 cursor-pointer"
            onClick={newGroupHandler}
        >
            <img src={newGroup.img} alt="dp" className="h-12" />
            <p className="text-lg font-semibold">{newGroup.text}</p>
        </div>
    );
};

export default NewGroup;
