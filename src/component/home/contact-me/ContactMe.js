import React from "react";
import { cardData } from "./contactmeData";
import Card from "./Card";

const ContactMe = () => {
    const cards = cardData;
    return (
        <div
            className="bg-secondary px-48 flex flex-col items-center gap-12 py-9 text-white"
            id="contact-us"
        >
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <div className="flex gap-6">
                {cards.map((card, index) => {
                    return <Card key={index} data={card} />;
                })}
            </div>
        </div>
    );
};

export default ContactMe;
