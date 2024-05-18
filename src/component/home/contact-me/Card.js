import React from "react";

const Card = ({ data }) => {
    const { name, img, year, icon1, icon2, icon3 } = data;
    return (
        <div className="flex flex-col items-center gap-6 py-8 px-28 pb-32">
            <img src={img} alt="dp" width={160} height={160} />

            <div>
                <h3 className="text-2xl font-bold text-center">{name}</h3>
                <h4 className="text-xl text-center">{year}</h4>
            </div>

            <div className="flex w-full justify-around">
                <a href={icon1.url}>
                    <img src={icon1.icon} alt="icon1" className="w-9 h-9" />
                </a>
                <a href={icon2.url}>
                    <img src={icon2.icon} alt="icon2" className="w-9 h-9" />
                </a>
                <a href={icon3.url}>
                    <img src={icon3.icon} alt="icon3" className="w-9 h-9" />
                </a>
            </div>
        </div>
    );
};

export default Card;
