import React from "react";
import { profile } from "../ChatData";

const Profile = ({ img }) => {
    return (
        <div className="absolute bg-black-opacity-40 h-full w-full flex flex-col justify-center items-center">
            <div className=" w-full flex justify-end mr-28">
                <img src={profile.cut} className="h-10" alt="X" />
            </div>
            <div>
                <img src={img} alt="DP" />
            </div>
        </div>
    );
};

export default Profile;
