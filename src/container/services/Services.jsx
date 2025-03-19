import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/card/Card"; // Import the Card component

const Services = () => {
  return (
    <motion.section
      className="bg-offWhite min-h-screen flex flex-col items-center px-6 md:px-16 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Title and Description */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-darkGreen text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Courses
      </motion.h2>

      <motion.div
        className="w-52 h-1 bg-darkGreen my-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      ></motion.div>

      <motion.p
        className="text-gray-700 text-center max-w-2xl mx-auto mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Expand your knowledge with our cutting-edge GIS courses. From mapping fundamentals to advanced spatial analysis, master the tools you need for geospatial success.
      </motion.p>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {[
          { title: "GIS Basics", description: "Learn the fundamentals of Geographic Information Systems." },
          { title: "Remote Sensing", description: "Discover the power of satellite imagery and remote sensing." },
          { title: "Spatial Analysis", description: "Analyze spatial data effectively for better decision-making." }
        ].map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Card title={course.title} description={course.description} bgColor="bg-mossGreen" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;