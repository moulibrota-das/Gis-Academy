import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import ProductCarousel from "../../components/productCarousel/ProductCarousel";

const Products = () => {
  return (
    <div className="grid grid-cols-2" id="products">
    <ProductCarousel/>
    <motion.section
      className="bg-custom-gradient-top min-h-screen flex flex-col items-center px-6 md:px-16 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Title and Description */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-darkGreen text-center relative z-[1]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Products
      </motion.h2>

      <motion.div
        className="w-52 h-1 bg-darkGreen my-2"
        initial={{ width: 0 }}
        animate={{ width: "13rem" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      ></motion.div>

      <motion.p
        className="text-gray-700 text-center max-w-2xl mx-auto mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Our GIS software - 21st Century GIS (premium version) integrates geographic data to improve decision-making in urban planning, transportation, and environmental monitoring. Paired with remote sensing technology, it enables real-time data collection from satellites, optimizing applications in agriculture, disaster management, and environmental analysis.
      </motion.p>

      {/* Cards Section */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {/* <ProductCarousel /> */}
      </motion.div>
    </motion.section>
    </div>
  );
};

export default Products;