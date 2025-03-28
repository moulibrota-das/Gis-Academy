import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCarousel from "../../components/productCarousel/ProductCarousel";

const product = {
  name: "21stCenturyGIS(Premium)",
  description:
    "Remote Sensing and Geographic Information System (GIS) Software",
};

const Products = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/product-detail");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Section - Product Carousel */}
      <ProductCarousel />

      {/* Right Section - Product Info */}
      <motion.section
        className="flex flex-col ml-12 h-[500px] py-10 px-6 md:px-16 border-l-4 border-darkGreen mt-28"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-darkGreen"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Products
        </motion.h2>

        <motion.p
          className="text-gray-700 mt-6 text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Our GIS software - 21st Century GIS (premium version) integrates
          geographic data to improve decision-making in urban planning,
          transportation, and environmental monitoring. Paired with remote
          sensing technology, it enables real-time data collection from
          satellites, optimizing applications in agriculture, disaster
          management, and environmental analysis.
        </motion.p>

        {/* Product Name & Description */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-darkGreen">{product.name}</h3>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>

        {/* Button Section */}
        <motion.button
          className="mt-8 bg-darkGreen text-white py-3 px-6 w-[200px] rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
        >
          Learn More
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Products;
