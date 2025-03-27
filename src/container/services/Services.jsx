import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

// Import images
import map1 from '/src/assets/images/Maps/map1.png';
import map2 from '/src/assets/images/Maps/map2.png';
import map3 from '/src/assets/images/Maps/map3.png';
import map4 from '/src/assets/images/Maps/map4.png';
import map5 from '/src/assets/images/Maps/map5.png';
import map6 from '/src/assets/images/Maps/map6.png';
import map7 from '/src/assets/images/Maps/map7.png';
import map8 from '/src/assets/images/Maps/map8.png';
import map9 from '/src/assets/images/Maps/map9.png';
import map10 from '/src/assets/images/Maps/map10.png';
import map11 from '/src/assets/images/Maps/map11.png';

import thesis1 from '/src/assets/images/Thesis/thesis1.png';
import thesis2 from '/src/assets/images/Thesis/thesis2.png';
import thesis3 from '/src/assets/images/Thesis/thesis3.png';

import graph1 from '/src/assets/images/Graphs/graph1.png';
import graph2 from '/src/assets/images/Graphs/graph2.png';
import graph3 from '/src/assets/images/Graphs/graph3.png';
import graph4 from '/src/assets/images/Graphs/graph4.png';
import graph5 from '/src/assets/images/Graphs/graph5.png';
import graph6 from '/src/assets/images/Graphs/graph6.png';

import model1 from '/src/assets/images/Models/model1.png';
import model2 from '/src/assets/images/Models/model2.png';
import model3 from '/src/assets/images/Models/model3.png';

import project1 from '/src/assets/images/Projects/project1.png';
import project2 from '/src/assets/images/Projects/project2.png';
import project3 from '/src/assets/images/Projects/project3.png';

// Service Data
const services = [
    {
        title: 'Map Preparation',
        images: [map1, map2, map3, map4, map5, map6, map7, map8, map9, map10, map11],
        description: 'Professional map creation for organizations, researchers, and scholars.',
    },
    {
        title: 'Thesis Writing',
        images: [thesis1, thesis2, thesis3],
        description: 'Expert thesis writing and formatting assistance for researchers.',
    },
    {
        title: 'Graphical Analysis',
        images: [graph1, graph2, graph3, graph4, graph5, graph6],
        description: 'Advanced graphical data analysis for research projects.',
    },
    {
        title: 'Workflow Models',
        images: [model1, model2, model3],
        description: 'Efficient workflow models for researchers and scholars.',
    },
    {
        title: 'Project Planning',
        images: [project1, project2, project3],
        description: 'Comprehensive project planning for research and development.',
    },
];

const Services = () => {
    const scrollContainerRef = useRef(null);
    const cardRefs = useRef([]);

    const scrollLeft = () => {
        if (scrollContainerRef.current && cardRefs.current.length > 0) {
            const cardWidth = cardRefs.current[0]?.current?.offsetWidth + 24 || 320 + 24;
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft - cardWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current && cardRefs.current.length > 0) {
            const cardWidth = cardRefs.current[0]?.current?.offsetWidth + 24 || 320 + 24;
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft + cardWidth,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.scrollBehavior = 'smooth';
        }
    }, []);

    return (
        <section className="min-h-screen bg-offWhite p-0 relative">
            <div className="m-12 sm:m-12 lg:m-16">
              <div className="flex flex-col items-center mb-8">
                <motion.h2
                  className="text-4xl md:text-5xl font-semibold text-darkGreen text-center relative z-[1]"
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
                        className="absolute left-2 top-1/3 bg-sky-500 bg-opacity-70 hover:bg-sky-600 transition-colors p-3 rounded-full shadow-md z-10"
                    >
                        <IoIosArrowBack className="h-6 w-6 text-white" />
                    </motion.button>

                    <div className="flex justify-center">
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-hidden space-x-6 items-start max-w-full"
                        >
                            {services.map((service, index) => (
                                <article
                                    key={index}
                                    ref={(el) => (cardRefs.current[index] = React.createRef(el))}
                                    className="bg-white rounded-xl shadow-md flex-shrink-0 w-80 sm:w-96 flex flex-col"
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
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow bg-mossGreen text-white rounded-b-xl min-h-[250px]">
                                        <h3 className="text-xl font-semibold mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="mb-4 flex-grow">
                                            {service.description}
                                        </p>
                                        <button className="px-5 py-2 bg-white text-mossGreen rounded-lg hover:bg-gray-100 transition-colors">
                                            Learn More
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
                        className="absolute right-2 top-1/3 bg-sky-500 bg-opacity-70 hover:bg-sky-600 transition-colors p-3 rounded-full shadow-md z-10"
                    >
                        <IoIosArrowForward className="h-6 w-6 text-white" />
                    </motion.button>

                </div>
            </div>
        </section>
    );
};

export default Services;