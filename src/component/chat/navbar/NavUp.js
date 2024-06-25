import React from "react";
import { brandName, home, groups, newperson } from "./NavData";

const NavUp = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <img src={brandName} className="w-16 h-12" alt="BrandLogo" />
      <div className="flex flex-col justify-center items-center w-full">
        <div
          className={`w-full cursor-pointer flex justify-center py-3 ${
            activeComponent === "home" ? "bg-secondary-darker" : ""
          }`}
          onClick={() => setActiveComponent("home")}
        >
          <img src={home} className="h-8" alt="Home" />
        </div>

        <div
          className={`w-full cursor-pointer flex justify-center py-3 ${
            activeComponent === "groups" ? "bg-secondary-darker" : ""
          }`}
          onClick={() => setActiveComponent("groups")}
        >
          <img src={groups} className="h-8" alt="Groups" />
        </div>

        <div
          className={`w-full cursor-pointer flex justify-center py-3 ${
            activeComponent === "addfriend" ? "bg-secondary-darker" : ""
          }`}
          onClick={() => setActiveComponent("addfriend")}
        >
          <img src={newperson} className="h-8" alt="NewPerson" />
        </div>
      </div>
    </div>
  );
};

export default NavUp;
