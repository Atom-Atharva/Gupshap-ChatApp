import React from "react";
import { profile } from "../ChatData";

const Profile = ({ img, setIsProfileVisible }) => {
    return (
        <div className="absolute bg-black-opacity-40 h-full w-full flex flex-col justify-center items-center">
            <div className="absolute top-10 right-10">
                <img
                    src={profile.cut}
                    className="h-10 cursor-pointer"
                    alt="Close"
                    onClick={() => setIsProfileVisible(false)}
                />
            </div>
            <div>
                <img src={img} alt="DP" className="rounded-full h-96" />
            </div>
        </div>
    );
};

export default Profile;
