import React from "react";
import BrandLogo from "./BrandLogo";
import Navigator from "./Navigator";
import RedirectBtns from "./RedirectBtns";

const Header = () => {
    return (
        <div className="flex justify-between py-4">
            <BrandLogo />
            <Navigator />
            <RedirectBtns />
        </div>
    );
};

export default Header;
