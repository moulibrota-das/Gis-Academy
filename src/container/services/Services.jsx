import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Import images
import map1 from "/src/assets/images/Maps/map1.png";
import map2 from "/src/assets/images/Maps/map2.png";
import map3 from "/src/assets/images/Maps/map3.png";
import map4 from "/src/assets/images/Maps/map4.png";
import map5 from "/src/assets/images/Maps/map5.PNG";
import map6 from "/src/assets/images/Maps/map6.PNG";
import map7 from "/src/assets/images/Maps/map7.png";
import map8 from "/src/assets/images/Maps/map8.png";
import map9 from "/src/assets/images/Maps/map9.png";
import map10 from "/src/assets/images/Maps/map10.png";
import map11 from "/src/assets/images/Maps/map11.png";

import thesis1 from "/src/assets/images/Thesis/Thesis1.png";
import thesis2 from "/src/assets/images/Thesis/Thesis2.png";
import thesis3 from "/src/assets/images/Thesis/Thesis3.png";

import graph1 from "/src/assets/images/Graphs/graph1.png";
import graph2 from "/src/assets/images/Graphs/graph2.png";
import graph3 from "/src/assets/images/Graphs/Graph3.png";
import graph4 from "/src/assets/images/Graphs/graph4.png";
import graph5 from "/src/assets/images/Graphs/graph5.png";
import graph6 from "/src/assets/images/Graphs/graph6.png";

import model1 from "/src/assets/images/Models/model1.png";
import model2 from "/src/assets/images/Models/model2.png";
import model3 from "/src/assets/images/Models/model3.png";

import project1 from "/src/assets/images/Projects/project1.jpeg";
import project2 from "/src/assets/images/Projects/project2.png";
import project3 from "/src/assets/images/Projects/project3.png";

// Service Data
const services = [
  {
    title: "Map Preparation",
    images: [
      map1,
      map2,
      map3,
      map4,
      map5,
      map6,
      map7,
      map8,
      map9,
      map10,
      map11,
    ],
    description:
      "Professional map creation for organizations, researchers, and scholars.",
  },
  {
    title: "Thesis Writing",
    images: [thesis1, thesis2, thesis3],
    description:
      "Expert thesis writing and formatting assistance for researchers.",
  },
  {
    title: "Graphical Analysis",
    images: [graph1, graph2, graph3, graph4, graph5, graph6],
    description: "Advanced graphical data analysis for research projects.",
  },
  {
    title: "Workflow Models",
    images: [model1, model2, model3],
    description: "Efficient workflow models for researchers and scholars.",
  },
  {
    title: "Project Planning",
    images: [project1, project2, project3],
    description: "Comprehensive project planning for research and development.",
  },
];

const Services = () => {
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    images: [],
    description: "",
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current && cardRefs.current.length > 0) {
      const cardWidth = cardRefs.current[0]?.current?.offsetWidth + 24 || 304;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && cardRefs.current.length > 0) {
      const cardWidth = cardRefs.current[0]?.current?.offsetWidth + 24 || 304;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
    }
  }, []);

  const openModal = (service, imageIndex = 0) => {
    // const isMobile = window.innerWidth < 640; // sm breakpoint
    // if (isMobile) {
    //   // For mobile, open the first image in a new tab
    //   window.open(service.images[0], "_blank");
    //   return;
    // }
    // For desktop, show modal
    setModalData(service);
    setCurrentImageIndex(imageIndex);
    setModalOpen(true);
  };

  const handleCardClick = (service, e) => {
    // const isMobile = window.innerWidth < 640; // sm breakpoint
    // if (isMobile) {
    //   // For mobile, open the first image in a new tab
    //   window.open(service.images[0], "_blank");
    //   return;
    // }
    // For desktop, show modal
    openModal(service);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % modalData.images.length
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalData.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="min-h-[700px] container mx-auto bg-offWhite py-4 relative"
      id="services"
    >
      <div className="m-[2.5rem] sm:m-[2.5rem] lg:m-16">
        <div className="flex flex-col items-center mb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-darkGreen text-center relative z-[1]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="w-[100px] h-1 bg-darkGreen my-2 relative z-[1]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          ></motion.div>
        </div>
        <div className="">
          {/* Left Button - Fully to the Left */}
          <motion.button
            onClick={scrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute left-6 top-1/2 bg-white/50 backdrop-blur-md transition-colors p-3 rounded-full shadow-md z-10"
          >
            <IoIosArrowBack className="h-6 w-6 text-darkGreen" />
          </motion.button>

          <div className="flex justify-center">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-6 items-start snap-x snap-mandatory scrollbar-hide"
            >
              {services.map((service, index) => (
                <article
                  key={index}
                  ref={(el) => (cardRefs.current[index] = { current: el })}
                  className="bg-white rounded-xl shadow-md flex-shrink-0 w-full sm:w-[320px] flex flex-col cursor-pointer"
                  onClick={() => openModal(service)} // Open modal on card click
                >
                  <div className="h-64 relative p-4">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      loop={true}
                      className="w-full h-full"
                    >
                      {service.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="w-full h-full flex items-center justify-center">
                            <img
                              src={image}
                              alt={`${service.title} - ${imgIndex + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-mossGreen text-white rounded-b-xl min-h-[200px]">
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm">{service.description}</p>
                    <button
                      className="px-5 py-2 bg-white text-mossGreen rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(service, e);
                      }}
                    >
                      Expand View
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Button - Fully to the Right */}
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute right-6 top-1/2 bg-white/50 backdrop-blur-md transition-colors p-3 rounded-full shadow-md z-10"
          >
            <IoIosArrowForward className="h-6 w-6 text-darkGreen" />
          </motion.button>
        </div>
      </div>

      {/* Modal for displaying images and text */}
      <div
        className={`${
          modalOpen
            ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            : "hidden"
        }`}
        aria-hidden={!modalOpen} // Add aria-hidden for accessibility
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-offWhite text-black shadow-2xl rounded-xl  max-w-[700px] lg:max-w-[800px] mx-6"
        >
          <div className="p-6 bg-mossGreen text-white rounded-t-xl mb-4">
            <h2 className="text-2xl font-semibold text-white">
              {modalData.title}
            </h2>
            <p className="text-white mt-2 text-left">{modalData.description}</p>
          </div>
          <div className="relative w-full">
            {modalData.images.length > 1 && (
              <>
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 z-10 rounded-full p-2"
                >
                  <IoIosArrowBack className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 z-10 rounded-full p-2"
                >
                  <IoIosArrowForward className="h-6 w-6" />
                </button>
              </>
            )}

            <img
              src={modalData.images[currentImageIndex]}
              alt={`${modalData.title} - ${currentImageIndex + 1}`}
              className="w-full rounded-t-xl max-h-[400px] object-contain"
            />
          </div>

          <div className="mt-6 p-6 flex justify-end">
            <button
              onClick={closeModal}
              className="bg-mossGreen text-offWhite hover:bg-gray-300 hover:text-gray-800 px-5 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
