import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ courseName, duration, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-darkGreen mb-3">
          {courseName}
        </h3>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Duration:</span> {duration}
        </p>
      </div>
      <div className="bg-gradient-to-r from-darkGreen to-teal-500 h-1"></div>
    </motion.div>
  );
};

export default CourseCard;