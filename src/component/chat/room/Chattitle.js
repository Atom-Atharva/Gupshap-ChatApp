import React from "react";

const Chattitle = ({
    setIsProfileVisible,
    setGroupInfoVisible,
    groupInfoVisible,
    isGroup,
    info,
}) => {
    return (
        <div className="flex h-20 px-5 gap-2 items-center border-b border-black-opacity-20">
            {isGroup ? (
                <div
                    className="flex items-center py-1 gap-5 cursor-pointer"
                    onClick={() => setGroupInfoVisible(!groupInfoVisible)}
                >
                    <img
                        src={info?.avatar?.url}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-xl font-semibold">{info?.name}</p>
                </div>
            ) : (
                <div
                    className="flex items-center py-1 gap-5 cursor-pointer"
                    onClick={() => setIsProfileVisible(true)}
                >
                    <img
                        src={info?.avatar?.url}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-xl font-semibold">{info?.name}</p>
                </div>
            )}
        </div>
    );
};

export default Chattitle;
