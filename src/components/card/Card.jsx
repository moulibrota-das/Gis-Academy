import React from "react";

const Card = ({ title, description, bgColor }) => {
  return (
    <div
      className={`rounded-2xl shadow-xl w-full h-80 lg:h-88 flex flex-col items-center justify-center p-8 ${bgColor} transition-transform duration-300 hover:scale-105`}
    >
      <h3 className="text-3xl font-semibold text-white">{title}</h3>
      <p className="text-white text-center mt-4 text-lg">{description}</p>
    </div>
  );
};

export default Card;
