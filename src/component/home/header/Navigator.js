import React from "react";

const Navigator = () => {
    return (
        <div className="flex gap-8 py-3 items-center">
            <div className="hover:font-semibold transition-all">
                <a href="#features">Features</a>
            </div>
            <div className="hover:font-semibold transition-all">
                <a href="#about">About</a>
            </div>
            <div className="hover:font-semibold transition-all">
                <a href="#contact-us">Contact Us</a>
            </div>
        </div>
    );
};

export default Navigator;
