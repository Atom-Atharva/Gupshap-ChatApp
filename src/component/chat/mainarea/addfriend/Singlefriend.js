import React from "react";

const Singlefriend = ({ data, newperson }) => {
    const { avatar, name } = data;
    console.log(avatar);
    return (
        <div className="flex px-6 py-2 justify-between items-center w-full cursor-pointer">
            <div className="flex   items-center justify-end gap-4">
                <img
                    src={avatar?.url}
                    alt="dp"
                    className="rounded-full h-14 w-14"
                />
                <p className="text-lg font-semibold">{name}</p>
            </div>
            <div>
                <img src={newperson} alt="dp" width={24} height={24} />
            </div>
        </div>
    );
};

export default Singlefriend;
