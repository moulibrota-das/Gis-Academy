import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
    <div className="relative min-h-screen w-full bg-custom-gradient flex items-center justify-center px-6 sm:px-12 md:px-20 pt-12 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center md:text-left w-full max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkGreen leading-tight font-heading">
            Master GIS & <br /> Remote Sensing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Transform data into decisions with our industry-ready courses in
            Remote Sensing and GIS. <br />
            <span className="font-semibold text-forestGreen">
              Be the expert the world needs.
            </span>
          </p>

          {/* Button with Floating Effect */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(58, 90, 64, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-forestGreen text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-deepGreen transition-all duration-300"
          >
            Explore Courses
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex justify-center md:justify-start space-x-3 pt-6">
            {images.map((_, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: currentImage === index ? 1.2 : 0.8 }}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  currentImage === index
                    ? "bg-mossGreen shadow-md"
                    : "bg-offWhite"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image Slider with Animation */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 sm:h-80 md:h-[30rem] lg:h-[28rem] bg-gray-300 rounded-[28px] overflow-hidden shadow-xl"
        >
          <img
            src={images[currentImage]}
            alt="GIS Course"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
