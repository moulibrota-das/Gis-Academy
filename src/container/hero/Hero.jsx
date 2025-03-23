import React from "react";
import { motion } from "framer-motion";
import Introduction from "../introduction/Introduction";

const Hero = () => {
  return (
    <motion.div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 pt-12 md:pt-0 overflow-hidden">
      {/* Moving Background */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(160deg,  /* Adjusted angle */
            rgba(52, 78, 65, 0.9) 22%, 
            rgba(88, 129, 87, 0.8) 50%, 
            rgba(162, 200, 161, 0.7) 71%, 
            rgba(246, 251, 240, 0.6) 85%), 
            url('/src/assets/images/map-dotted.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          className="text-lg sm:text-xl md:text-md text-gray-900 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Unlock the power of{" "}
          <span className="font-semibold text-forestGreen underline">
            GIS & Remote Sensing 
          </span>
          {" "}to drive innovation and decision-making. Analyze spatial data, build
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
