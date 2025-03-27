import React from "react";

const Card = ({ title, description, bgColor, width, height }) => {
  return (
    <div
      className={`rounded-2xl w-${width} h-[${height}] lg:h-88 flex flex-col items-center justify-center p-8 ${bgColor} transition-transform duration-300 hover:scale-105`}
    >
      <h3 className="text-xl font-semibold text-darkGreen">{title}</h3>
      <p className="text-darkGreen text-center mt-4 text-sm">{description}</p>
    </div>
  );
};

export default Card;
