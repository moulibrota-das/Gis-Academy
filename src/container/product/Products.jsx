import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCarousel from "../../components/productCarousel/ProductCarousel";

const product = {
  name: "21st Century GIS (Premium)",
  description:
    "Remote Sensing and Geographic Information System (GIS) Software",
};

const Products = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/product-detail");
  };

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-screen">
      {/* Product Carousel Section */}
      <ProductCarousel />
      {/* Text Section */}
      <motion.section
        className="bg-custom-gradient-top flex flex-col items-center justify-center p-6 md:p-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title with Animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-darkGreen text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Products
        </motion.h2>

        {/* Animated Divider Line */}
        <motion.div
          className="w-52 h-1 bg-darkGreen my-4"
          initial={{ width: 0 }}
          animate={{ width: "13rem" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        ></motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Our GIS software - 21st Century GIS (Premium) integrates geographic
          data to improve decision-making in urban planning, transportation, and
          environmental monitoring. Paired with remote sensing technology, it
          enables real-time data collection from satellites, optimizing
          applications in agriculture, disaster management, and environmental
          analysis.
        </motion.p>

        {/* Product Name & Description */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-darkGreen">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>

        {/* Learn More Button */}
        <motion.button
          className="mt-8 bg-darkGreen text-white py-3 px-6 w-[200px] rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
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
