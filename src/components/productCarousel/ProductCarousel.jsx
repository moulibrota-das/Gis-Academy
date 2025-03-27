import React, { useState, useEffect } from "react";

import img1 from "/src/assets/product/Brochure_page-0001.jpg";
import img2 from "/src/assets/product/Brochure_page-0002.jpg";
import img3 from "/src/assets/product/Brochure_page-0003.jpg";
import img4 from "/src/assets/product/Brochure_page-0004.jpg";
import img5 from "/src/assets/product/Brochure_page-0005.jpg";
import img6 from "/src/assets/product/Brochure_page-0006.jpg";
import img7 from "/src/assets/product/Brochure_page-0007.jpg";
import img8 from "/src/assets/product/Brochure_page-0008.jpg";

const product = {
  name: "21stCenturyGIS(Premium)",
  description: "Remote Sensing and Geographic Information System (GIS) Software",
  images: [img1, img2, img3, img4, img5, img6, img7, img8], // Array of images
};

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // 3000ms = 3 seconds

    // Clean up the interval when the component is unmounted or when the effect is cleaned up
    return () => clearInterval(interval);
  }, [currentIndex]); // Depend on currentIndex to restart the interval when it changes

  return (
    <div className="flex justify-center items-center mt-12 bg-mossGreen rounded-lg">
      <div className="relative w-full px-10"> {/* Increased padding */}
        {/* Product Card with Glassmorphism and Border */}
        <div className="overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-transform duration-500">
          {/* Left Section with Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={product.images[currentIndex]}
                alt={`Product 1 - Image ${currentIndex + 1}`}
                className="w-full h-[400px] object-contain rounded-lg" // Ensure the image is not cropped
              />
            </div>
          </div>

          {/* Right Section with Info */}
          <div className="w-full md:w-1/2 pl-6 border-l-2 border-green-500">
            <h2 className="text-4xl font-bold text-offWhite drop-shadow-md tracking-wide">              {product.name}
            </h2>
            <p className="text-offWhite my-4 leading-relaxed text-md">
              {product.description}
            </p>
            <div className="my-4 flex items-center gap-6">
              {/* Price Section */}
              {/* <span className="text-3xl font-bold text-offWhite tracking-wider">
                {product.price}
              </span> */}

              {/* Know More Button */}
              <button className="bg-offWhite text-darkGreen px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-100 hover:text-green-700 transition-transform transform hover:scale-105 active:scale-95">
                Know More
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