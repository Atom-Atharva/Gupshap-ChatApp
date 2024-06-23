import React from "react";
import { brandName, home, groups, newperson } from "./NavData";

const NavUp = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <img src={brandName} className="w-16 h-12" alt="BrandLogo" />
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src={home}
          className={`w-8 h-8 cursor-pointer ${
            activeComponent === "home" ? "bg-secondary-darker" : ""
          }`}
          alt="Home"
          onClick={() => setActiveComponent("home")}
        />
        <img
          src={groups}
          className={`w-8 h-8 cursor-pointer ${
            activeComponent === "groups" ? "bg-secondary-darker" : ""
          }`}
          alt="Groups"
          onClick={() => setActiveComponent("groups")}
        />
        <img
          src={newperson}
          className={`w-8 h-8 cursor-pointer ${
            activeComponent === "addfriend" ? "bg-secondary-darker" : ""
          }`}
          alt="NewPerson"
          onClick={() => setActiveComponent("addfriend")}
        />
      </div>
    </div>
  );
};

export default NavUp;
