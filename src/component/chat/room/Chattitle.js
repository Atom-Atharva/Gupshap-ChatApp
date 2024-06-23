import React from "react";
import { profileimg, profileName, isGroup, groupInfo } from "./ChatData";

const Chattitle = ({
    setIsProfileVisible,
    setGroupInfoVisible,
    groupInfoVisible,
}) => {
    return (
        <div className="flex h-20 px-5 gap-2 items-center border-b border-black-opacity-20">
            {isGroup ? (
                <div
                    className="flex items-center py-1 gap-5 cursor-pointer"
                    onClick={() => setGroupInfoVisible(!groupInfoVisible)}
                >
                    <img
                        src={groupInfo.image}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-xl font-semibold">{groupInfo.name}</p>
                </div>
            ) : (
                <div
                    className="flex items-center py-1 gap-5 cursor-pointer"
                    onClick={() => setIsProfileVisible(true)}
                >
                    <img
                        src={profileimg}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-xl font-semibold">{profileName}</p>
                </div>
            )}
        </div>
    );
};

export default Chattitle;
