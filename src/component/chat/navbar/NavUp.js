import React from "react";
import { brandName, home, groups, newperson } from "./NavData";

const NavUp = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-12">
            <img src={brandName} className="w-16 h-12" alt="BrandLogo" />
            <div className="flex flex-col justify-center items-center gap-5">
                <img src={home} className="w-8 h-8 cursor-pointer" alt="Home" />
                <img
                    src={groups}
                    className="w-8 h-8 cursor-pointer"
                    alt="Groups"
                />
                <img
                    src={newperson}
                    className="w-8 h-8 cursor-pointer"
                    alt="NewPerson"
                />
            </div>
        </div>
    );
};

export default NavUp;
