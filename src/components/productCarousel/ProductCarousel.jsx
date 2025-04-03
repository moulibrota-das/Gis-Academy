import React, { useState, useEffect } from "react";

import img1 from "/src/assets/product/Brochure_page-0001.jpg";
import img2 from "/src/assets/product/Brochure_page-0002.jpg";
import img3 from "/src/assets/product/Brochure_page-0003.jpg";
import img4 from "/src/assets/product/Brochure_page-0004.jpg";
import img5 from "/src/assets/product/Brochure_page-0005.jpg";
import img6 from "/src/assets/product/Brochure_page-0006.jpeg";
import img7 from "/src/assets/product/Brochure_page-0007.jpg";
import img8 from "/src/assets/product/Brochure_page-0008.jpg";

const product = {
  name: "21stCenturyGIS (Premium)",
  description:
    "Remote Sensing and Geographic Information System (GIS) Software",
  images: [img1, img2, img3, img4, img5, img6, img7, img8],
};

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-mossGreen flex justify-center items-center h-[95%] p-4 md:p-0 md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="w-[90%] md:w-[80%] h-[95%] rounded-lg flex justify-center items-center">
        <img
          src={product.images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className="w-[80%] h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
