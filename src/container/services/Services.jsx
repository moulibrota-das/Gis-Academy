import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/card/Card"; // Import the Card component
import courses from "../../utils/courses";
import CourseCard from "../../components/card/CourseCard";

const Services = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center px-6 md:px-16 py-20 bg-offWhite 
             bg-[url('/src/assets/images/Services.png')] bg-cover bg-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Radial Gradient with Half Round Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[75%] 
               bg-[radial-gradient(89.79%_126.27%_at_50%_6.79%,#f6fbf0_55.15%,rgba(250,250,250,0)_78.93%)] 
               rounded-full pointer-events-none"
      ></div>
      {/* Title and Description */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-darkGreen text-center relative z-[1]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Courses
      </motion.h2>

      <motion.div
        className="w-52 h-1 bg-darkGreen my-2 relative z-[1]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      ></motion.div>

      <motion.p
        className="text-gray-700 text-center max-w-2xl mx-auto mt-2 relative z-[1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Expand your knowledge with our cutting-edge GIS courses. From mapping
        fundamentals to advanced spatial analysis, master the tools you need for
        geospatial success.
      </motion.p>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-4xl relative z-[1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <CourseCard key={index} course={course} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
