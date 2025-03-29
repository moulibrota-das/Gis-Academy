import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCarousel from "../../components/productCarousel/ProductCarousel";

const product = {
  name: "21stCenturyGIS (Premium)",
  description:
    "Remote Sensing and Geographic Information System (GIS) Software",
};

const Products = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/product-detail");
  };

  return (
    <div
      className="flex flex-col-reverse bg-mossGreen rounded-xl items-center md:grid md:grid-cols-2 container mx-auto min-h-[800px]"
      id="products"
    >
      {/* Product Carousel Section */}
      <ProductCarousel />
      {/* Text Section */}
      <motion.section
        className="bg-custom-gradient-top flex flex-col items-center h-full p-8 md:pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title with Animation */}
        <motion.h2
          className="text-4xl md:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Products
        </motion.h2>

        {/* Animated Divider Line */}
        <motion.div
          className="w-52 h-1 bg-white my-4"
          initial={{ width: 0 }}
          animate={{ width: "13rem" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        ></motion.div>

        {/* Description */}
        <motion.p
          className="text-beige text-justify mt-6 text-lg md:text-lg leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Our GIS software - 21stCenturyGIS (Premium version) integrates
          geographic data to improve decision-making in Urban Planning,
          Transportation, and Environment Monitoring. Paired with Remote Sensing
          Technology, it enables real-time data collection from satellites,
          optimizing applications in Agriculture, Disaster Management, and
          Environmental Analysis.
        </motion.p>

        {/* Product Name & Description */}
        <div className="mt-8 max-w-[32rem] md:w-[32rem]">
          <p className="text-2xl md:text-3xl  font-bold text-justify text-white">
            {product.name}
          </p>
          <p className="text-gray-300 mt-2">{product.description}</p>
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
