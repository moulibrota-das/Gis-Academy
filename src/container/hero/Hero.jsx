import React, { useState, useEffect, useRef } from "react";
import imageOne from "/src/assets/images/image-1.jpg";
import imageTwo from "/src/assets/images/image-2.jpg";
import imageThree from "/src/assets/images/image-3.jpg";

// Dummy images
const images = [imageOne, imageTwo, imageThree];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-custom-gradient flex items-center justify-center px-6 sm:px-12 md:px-20 pt-12 md:pt-0 transition-all duration-700 ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        {/* Left Side - Text Content */}
        <div className="space-y-6 text-center md:text-left w-full max-w-lg md:max-w-xl lg:max-w-2xl animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkGreen leading-tight font-heading ">
            Master GIS & Remote Sensing
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
            Transform data into decisions with our industry-ready courses in
            Remote Sensing and GIS. <br />
            <span className="font-semibold text-forestGreen">
              Be the expert the world needs.
            </span>
          </p>
          <button className="bg-forestGreen text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-deepGreen transition-all duration-300 transform hover:scale-105">
            Explore Courses
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center md:justify-start space-x-3 pt-6">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
                  currentImage === index
                    ? "bg-mossGreen scale-110 shadow-md"
                    : "bg-offWhite"
                } cursor-pointer`}
                onClick={() => setCurrentImage(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Side - Auto-Sliding Image with Animation */}
        <div className="w-full h-64 sm:h-80 md:h-[30rem] lg:h-[34rem] bg-gray-300 rounded-[40px] overflow-hidden shadow-xl relative animate-slideIn">
          <img
            src={images[currentImage]}
            alt="GIS Course"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
