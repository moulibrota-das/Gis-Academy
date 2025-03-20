import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 pt-12 md:pt-0 overflow-hidden">
      {/* Moving Background */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(246, 251, 240, 0.8), rgba(163, 177, 138, 0.7)), url('/src/assets/images/white-map.jpg')`,
          backgroundBlendMode: "overlay",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Content Section */}
      <motion.div
        className="relative w-full max-w-3xl mx-auto text-center flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkGreen leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Mapping the Future of Geospatial Intelligence
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Unlock the power of{" "}
          <span className="font-semibold text-forestGreen">
            GIS & Remote Sensing
          </span>
          to drive innovation and decision-making. Analyze spatial data, build
          interactive maps, and shape the future with cutting-edge geospatial
          technology.
        </motion.p>

        <motion.button
          className="bg-forestGreen text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-deepGreen transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          Explore Our GIS Solutions
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
