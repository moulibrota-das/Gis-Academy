import React from "react";
import introOne from "/src/assets/images/intro-1.png";
import introTwo from "/src/assets/images/intro-2.png";

const images = [introOne, introTwo];

const Introduction = () => {
  return (
    <div className="min-h-screen bg-forestGreen flex items-center justify-center px-8 md:px-24 py-6 md:py-16">
      {/* Parent Container (Responsive) */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
        {/* Left Section (Images) */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="flex flex-row md:flex-row gap-3 md:gap-8">
            {/* Image 1 - Aligned at the top */}
            <div className="w-28 md:w-44 lg:w-40 h-60 md:h-96 bg-gray-200 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-lg">
              <img
                src={images[0]}
                alt="First"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 - Lowered using mt-4 on mobile, mt-20 on desktop */}
            <div className="w-26 md:w-44 lg:w-40 h-60 md:h-96 bg-gray-200 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-lg mt-4 md:mt-20">
              <img
                src={images[1]}
                alt="Second"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 - Aligned at the top */}
            <div className="w-28 md:w-44 lg:w-40 h-60 md:h-96 bg-gray-300 rounded-[40px] md:rounded-[50px] shadow-lg"></div>
          </div>
        </div>

        {/* Right Section (Text Content) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0 md:pl-12">
          <h1 className="text-3xl md:text-6xl font-bold text-beige">
            Explore GIS & Mapping
          </h1>
          <p className="text-lg text-beige mt-4">
            Learn how to analyze spatial data, create stunning maps, and solve
            real-world problems using advanced GIS techniques.
          </p>
          <button className="mt-6 bg-offWhite text-darkGreen px-6 py-3 rounded-md text-lg font-medium hover:bg-beige transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
