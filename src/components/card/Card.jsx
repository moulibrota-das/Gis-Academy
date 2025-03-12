import React from "react";

const Card = ({ title, description, bgColor }) => {
  return (
    <div
      className={`rounded-xl shadow-lg w-full h-64 flex flex-col items-center justify-center p-6 ${bgColor}`}
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white text-center mt-2">{description}</p>
    </div>
  );
};

export default Card;
