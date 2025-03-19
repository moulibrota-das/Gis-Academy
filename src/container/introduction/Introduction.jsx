import React from "react";
import { motion } from "framer-motion";
import introOne from "/src/assets/images/intro-1.png";
import introTwo from "/src/assets/images/intro-2.png";

const images = [introOne, introTwo];

const Introduction = () => {
  return (
    <div className="min-h-screen bg-offWhite flex items-center justify-center px-8 md:px-24 py-6 md:py-16">
      {/* Parent Container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
        {/* Left Section (Images with Scroll Motion) */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="flex flex-row md:flex-row gap-4 md:gap-10">
            {/* Image 1 */}
            <motion.div 
              className="w-28 md:w-44 lg:w-40 h-60 md:h-96 bg-gray-200 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <img src={images[0]} alt="GIS Analysis" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 2 - Slightly Lower */}
            <motion.div 
              className="w-26 md:w-44 lg:w-40 h-60 md:h-96 bg-gray-200 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-lg mt-4 md:mt-16"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <img src={images[1]} alt="Spatial Data Mapping" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 3 - Placeholder */}
            <motion.div 
              className="w-28 md:w-44 lg:w-40 h-60 md:h-96 bg-gray-300 rounded-[40px] md:rounded-[50px] shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: false }}
            />
          </div>
        </motion.div>

        {/* Right Section (Text Content with Scroll Motion) */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-darkGreen leading-tight">
            Transform the Way You See the World
          </h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-lg">
            Harness the power of <span className="font-semibold text-forestGreen">GIS & Remote Sensing</span>  
            to analyze spatial patterns, create interactive maps, and solve real-world challenges  
            in **urban planning, environment, and business intelligence**.
          </p>
          <motion.button
            className="mt-6 bg-forestGreen text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-deepGreen transition transform hover:scale-105 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Start Your GIS Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;