import React from "react";

const BrandLogo = () => {
    return (
        <div className="flex gap-2">
            <img
                src={`${process.env.PUBLIC_URL}/assets/svg/BrandIcon.svg`}
                alt="BrandIcon"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/svg/BrandLogo.svg`}
                alt="BrandLogo"
            />
        </div>
    );
};

export default BrandLogo;
