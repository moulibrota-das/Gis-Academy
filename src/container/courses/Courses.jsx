import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && !showAll) {
      setVisibleCourses(courses.slice(0, 3));
    } else {
      setVisibleCourses(courses);
    }
  }, [courses, showAll, isMobile]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (selectedCourse) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [selectedCourse]);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    if (window.location.hash !== "#courses") {
      window.location.hash = "#courses";
    }
  };

  return (
    <div
      className="min-h-[800px] container mx-auto bg-mossGreen rounded-xl px-6 pt-16 pb-8 flex flex-col items-center"
      id="courses"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-white text-center relative z-[1]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Courses
      </motion.h2>

      <motion.div
        className="w-[100px] h-1 bg-white my-2 relative z-[1]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      ></motion.div>
      <div className="text-sm text-gray-300 mt-4 italic text-left w-full">
        *Theory and Practical classes for all courses are twice in a week and 1½
        hours per day
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-8">
        {visibleCourses.map((course, index) => (
          <motion.div
            key={index}
            className="relative bg-offWhite backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-lg font-bold text-darkGreen font-serif bold">
                {course.courseName}
              </h2>
              {(course.durationMonths > 0 || course.durationHours > 0) && (
                <p className="text-grey-300 mt-2 underline">
                  <strong>Duration:</strong>{" "}
                  {course.durationMonths
                    ? `${course.durationMonths} Months`
                    : `${course.durationHours} Hours`}
                </p>
              )}
            </div>
            <motion.button
              className="bg-forestGreen text-white px-6 py-2 rounded-lg text-md font-semibold shadow-md hover:bg-deepGreen transition-all duration-300 transform hover:scale-105 mt-4"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCourse(course)}
            >
              View Details
            </motion.button>
          </motion.div>
        ))}

        {/* Contact Us Card */}
        {(!isMobile || showAll) && (
          <motion.div
            className="relative bg-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-2xl font-bold text-white">
                Contact Us for More
              </h2>
              <p className="text-gray-300 mt-2">
                Interested in learning more? Get in touch!
              </p>
            </div>
            <motion.button
              className="bg-forestGreen text-white px-6 py-2 rounded-lg text-md font-semibold shadow-md hover:bg-deepGreen transition-all duration-300 transform hover:scale-105 mt-4"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior
                const targetSection = document.querySelector("#contact"); // Replace with the target section's ID
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </div>

      {courses.length > 3 && isMobile && (
        <div className="mt-8">
          {!showAll && (
            <button
              className="px-6 py-2 bg-forestGreen text-white rounded-lg font-semibold hover:bg-deepGreen transition-all"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
          {showAll && (
            <button
              className="px-6 py-2 bg-forestGreen text-white rounded-lg font-semibold hover:bg-deepGreen transition-all"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </div>
      )}

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-offWhite p-6 rounded-2xl shadow-xl max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-300 hover:"
                onClick={() => setSelectedCourse(null)}
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold">
                {selectedCourse.courseName}
              </h2>
              {(selectedCourse.durationMonths > 0 ||
                selectedCourse.durationHours > 0) && (
                <p className="mt-2">
                  <strong>Duration:</strong>{" "}
                  {selectedCourse.durationMonths
                    ? `${selectedCourse.durationMonths} Months`
                    : `${selectedCourse.durationHours} Hours`}
                </p>
              )}
              {selectedCourse.topics && (
                <div className="mt-4">
                  <h3 className=" font-semibold text-lg">Topics Covered:</h3>
                  <ul className="mt-2 text-sm">
                    {Array.isArray(selectedCourse.topics)
                      ? selectedCourse.topics.map((topic, i) => (
                          <li key={i} className="mt-1 flex items-center gap-2">
                            <span className="w-2 h-2 bg-forestGreen rounded-full"></span>{" "}
                            {topic}
                          </li>
                        ))
                      : Object.entries(selectedCourse.topics).map(
                          ([key, value], i) => (
                            <li key={i} className="mt-2">
                              <strong className="text-oliveGreen">
                                {key}:
                              </strong>{" "}
                              {value.topics.join(", ")}
                            </li>
                          )
                        )}
                  </ul>
                </div>
              )}

              <motion.button
                className="mt-6 px-6 py-2 w-full text-lg font-semibold bg-forestGreen text-white rounded-lg shadow-md hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCourse(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;
