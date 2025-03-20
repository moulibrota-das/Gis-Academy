import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Shoto Todoroki",
    price: "$1,500",
    description:
      "A mystical hand that glows with an eerie light. It is said to grant visions of the unseen.",
    image:
      "https://i.pinimg.com/736x/33/06/0f/33060f8cd3ab88274d05ab8e104caeb1.jpg",
    bonus: "3 Bottles of Elixir",
  },
  {
    id: 2,
    name: "Toya Todoroki",
    price: "$1,200",
    description:
      "A cursed hand that whispers forgotten secrets to those who possess it.",
    image:
      "https://i.pinimg.com/736x/56/87/dc/5687dc75ede6816e785c946ad3d93a94.jpg",
    bonus: "2 Bottles of Shadow Potion",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center mt-12 bg-mossGreen rounded-lg">
      <div className="relative w-full max-w-[900px]">
        {/* Product Card with Glassmorphism and Border */}
        <div className="overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-transform duration-500">
          {/* Left Section with Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-offWhite text-darkGreen text-sm px-3 py-1 rounded-full shadow-lg">
                🎁 Bonus: {products[currentIndex].bonus}
              </div>
            </div>
          </div>

          {/* Right Section with Info */}
          <div className="w-full md:w-1/2 pl-6 border-l-2 border-green-500">
            <h2 className="text-5xl font-extrabold text-offWhite drop-shadow-lg leading-tight">
              {products[currentIndex].name}
            </h2>
            <p className="text-offWhite my-4 font-semibold text-lg tracking-wide">
              🎁 + {products[currentIndex].bonus}
            </p>
            <p className="text-offWhite my-4 leading-relaxed text-md">
              {products[currentIndex].description}
            </p>
            <div className="my-4 flex items-center gap-6">
              {/* Price Section */}
              <span className="text-3xl font-bold text-offWhite tracking-wider">
                {products[currentIndex].price}
              </span>

              {/* Buy Now Button */}
              <button className="bg-offWhite text-darkGreen px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-100 hover:text-green-700 transition-transform transform hover:scale-105 active:scale-95">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-[-1.5rem] -translate-y-1/2 bg-gray-800/60 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-900/70"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-[-1.5rem] -translate-y-1/2 bg-gray-800/60 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-900/70"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
