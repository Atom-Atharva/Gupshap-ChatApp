import React from "react";
import { adminView } from "../ChatData";
import { useSelector } from "react-redux";

const Member = ({ info, isGroupAdmin }) => {
    const user = useSelector((store) => store.user);
    const isMemberAdmin = info._id === user?._id;

    return (
        <div className="px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="h-10 rounded-full overflow-hidden">
                    <img
                        src={info.avatar.url}
                        className="h-10 rounded-full"
                        alt="DP"
                    />
                </div>

                <p className="font-semibold">{info.name}</p>
            </div>

            {isGroupAdmin && !isMemberAdmin && (
                <img src={adminView.addUser} alt="ADD" />
            )}
        </div>
    );
};

export default Member;
