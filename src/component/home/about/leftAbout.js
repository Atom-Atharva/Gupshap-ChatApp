import React from "react";

function LeftAbout({ img, title, description }) {
  const paragraphs = description.split("\n\n");

  return (
    <div className="flex items-start py-16 px-48 gap-6 justify-between">
      <img src={img} className="w-[415px] h-[258px] rounded-md" alt={title} />

      <div className="flex flex-col items-start justify-center gap-6">
        <p className="text-3xl font-bold">{title}</p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg ">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LeftAbout;
