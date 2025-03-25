import React from "react";
import { motion } from "framer-motion";
import introOne from "/src/assets/images/intro-1.png";
import introTwo from "/src/assets/images/intro-2.png";

const images = [introOne, introTwo];

const Introduction = () => {
  return (
    <div className="min-h-screen bg-offWhite flex items-center justify-center px-8 md:px-24 py-6 md:py-16">
      {/* Parent Container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center gap-12">
        {/* Left Section (Images with Scroll Motion) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="flex flex-row gap-6 md:gap-10">
            {/* Image 1 */}
            <motion.div
              className="w-32 md:w-44 h-64 md:h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img src={images[0]} alt="GIS Analysis" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="w-32 md:w-44 h-64 md:h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg mt-6 md:mt-16"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src={images[1]} alt="Spatial Data Mapping" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Text Content with Scroll Motion) */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-darkGreen leading-tight">
            Empowering the Future with <br />
            <span className="text-forestGreen">GIS & Remote Sensing</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-lg">
            21ST CENTURY GIS ACADEMY has been pioneering GIS solutions since
            1998, providing advanced mapping and spatial analysis for industries
            such as urban planning, environmental studies, and business
            intelligence.
          </p>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-lg">
            Our innovative software, like <span className="font-semibold text-deepGreen">People's GIS</span>, has revolutionized the
            industry, making spatial data accessible and actionable.
          </p>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-lg">
            Join us in shaping the future of geospatial intelligence through
            cutting-edge technology and industry-ready GIS professionals.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <motion.button
              className="bg-forestGreen text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-deepGreen transition transform hover:scale-105 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Learn More
            </motion.button>

            <motion.button
              className="bg-white border-2 border-forestGreen text-forestGreen px-6 py-2 rounded-lg text-lg font-medium hover:bg-forestGreen hover:text-white transition transform hover:scale-105 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Start Your GIS Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;