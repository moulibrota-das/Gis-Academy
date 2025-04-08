import React from "react";
import { motion } from "framer-motion";
import mapDotted from "/src/assets/images/map-dotted.png";

const Hero = () => {
  return (
    <motion.div
      className=" relative min-h-screen md:max-h-[1280px] flex flex-col items-center justify-center px-6 sm:px-12  pt-12 md:pt-0 overflow-hidden"
      id="home"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(175deg,  
            rgba(52, 78, 65, 1) 22%, 
            rgba(88, 129, 87, 1) 50%, 
            rgba(162, 200, 161, 1) 71%, 
            rgba(246, 251, 240, 1) 85%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${mapDotted})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "darken",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 2.5,
          // repeat: Infinity,
          // repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Content Section */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto text-center flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-2xl md:text-[2.5rem] font-bold text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Mapping the Future of Geospatial Intelligence
        </motion.h1>
        <motion.p
          className="text-sm sm:text-xl md:text-sm text-white max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Unlock the power of{" "}
          <span className="font-semibold text-white underline">
            GIS & Remote Sensing
          </span>{" "}
          to drive innovation and decision-making. Analyze spatial data, build
          interactive maps, and shape the future in the era of cutting-edge
          geospatial technology.
        </motion.p>

        <motion.div
          className="bg-white/50 backdrop-blur-md text-darkGreen text-sm sm:text-base font-semibold leading-relaxed space-y-3 w-full max-w-2xl px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md mt-3 text-center sm:text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p>
            <strong>
              An ISO 9001 : 2015 Organisation <br />
              <span className="font-normal">
                Registration Number - 0430Q202724{" "}
                <a
                  href="https://www.otabucert.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-deepGreen transition"
                >
                  www.otabucert.com
                </a>
              </span>
            </strong>
          </p>
          <p>
            <strong>
              An Organisation registered under Ministry of Micro, Small and
              Medium Enterprises, Government of India <br />
              <span className="font-normal">
                Registration Number - UDYAM-WB-10-0019052{" "}
                <a
                  href="https://www.msme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-deepGreen transition"
                >
                  www.msme.gov.in
                </a>
              </span>
            </strong>
          </p>
        </motion.div>

        <div className="flex space-x-4">
          <motion.button
            className="bg-forestGreen text-white px-6 py-2 rounded-lg text-md font-semibold shadow-md hover:bg-deepGreen transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior
              const targetSection = document.querySelector("#introduction"); // Replace with the target section's ID
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn More
          </motion.button>

          <motion.button
            className="bg-white text-forestGreen border-2 border-white px-6 py-2 rounded-lg text-md font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior
              const targetSection = document.querySelector("#contact"); // Replace with the target section's ID
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
