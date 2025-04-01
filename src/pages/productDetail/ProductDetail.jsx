import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/footer/Footer";

// Image Imports (Maintained from original)
import Mosaic1 from "/src/assets/product/brochure/page2/Mosaic1.jpg";
import Mosaic2 from "/src/assets/product/brochure/page2/Mosaic2.jpg";
import PImage from "/src/assets/product/brochure/page2/P_Image.jpg";
import Pan from "/src/assets/product/brochure/page2/PAN.jpg";
import PanMerge from "/src/assets/product/brochure/page2/PanMerge.jpg";
import PixelProfile from "/src/assets/product/brochure/page2/PixelProfile2.png";
import Intensity_Hue_Saturation from "/src/assets/product/brochure/page3/Intensity_Hue_Saturation.jpg";
import DigitalClassification1 from "/src/assets/product/brochure/page3/DigitalClassification1.jpg";
import AttributeManager from "/src/assets/product/brochure/page3/AttributeManager.jpg";
import BufferImg from "/src/assets/product/brochure/page4/Buffer.jpg";
import Landuse_BalupurMap from "/src/assets/product/brochure/page4/Landuse_BalupurMap.jpg";
import Thematic_Map from "/src/assets/product/brochure/page4/Thematic_Map.jpg";
import GoogleEarth_Connectivity from "/src/assets/product/brochure/page5/GoogleEarth_Connectivity-2.jpg";
import MorphometricAnalysisMap from "/src/assets/product/brochure/page5/MorphometricAnalysisMap.png";
import Network_Analysis from "/src/assets/product/brochure/page5/Network_Analysis.jpg";
import Fence_Section_Diagram from "/src/assets/product/brochure/page7/Fence_Section_Diagram.jpg";
import Litholog from "/src/assets/product/brochure/page7/Litholog.jpg";
import Section_Diagram from "/src/assets/product/brochure/page7/Section_Diagram.jpg";

// Product data (Maintained from original)
const productData = [
  {
    title: "Remote Sensing & Image Analysis",
    description:
      "21stCenturyGIS simplifies image processing and interpretation, while maintaining the integrity of geo-spatial data.",
    topics: [
      {
        category: ["Processing", "Preparation"],
        details: {
          Processing:
            "Pixel Profile, Band Combination, Spectral Profile, Spectral Plot, Inquire Cursor, Opacity, Swipe, Pixel Chart & Histogram Manipulation.",
          Preparation:
            "Projection, Pan Merge, Mosaic, Subset, Resize & False Colour Composite.",
        },
        details_type: "processing_preparation",
        images: [
          { src: Mosaic1, caption: "Mosaic Example" },
          { src: Mosaic2, caption: "Advanced Mosaic Technique" },
          { src: PImage, caption: "Image Processing Example" },
          { src: Pan, caption: "Panchromatic Image" },
          { src: PanMerge, caption: "Pan Merge Result" },
          { src: PixelProfile, caption: "Pixel Profile Analysis" },
        ],
      },
      {
        category: "Enhancement",
        details:
          "Spatial Filter, Contrast, Brightness, Colour Transformation, Intensity-Hue-Saturation",
        details_type: "text",
        images: [
          {
            src: Intensity_Hue_Saturation,
            caption: "Intensity-Hue-Saturation Analysis",
          },
        ],
      },
      {
        category: "Classification",
        details:
          "Unsupervised & Supervised, Signature Editor, Attribute Manager, Accuracy Assessment and Class Refinement with the help of ancillary data.",
        details_type: "text",
        images: [
          {
            src: DigitalClassification1,
            caption: "Digital Classification Example",
          },
        ],
      },
      {
        category: "Interpretation",
        details: [
          "Ratio Vegetation Index",
          "Normalized Differential Vegetation Index",
          "Soil-Adjusted Vegetation Index",
          "Transformed Vegetation Index",
          "Iron Oxide, Clay Minerals, Mineral Composite, Hydrothermal Composite",
          "Change Detection",
        ],
        details_type: "list",
        images: [
          { src: AttributeManager, caption: "Attribute Manager Interface" },
        ],
      },
    ],
  },
  {
    title: "GIS Mapping & Analysis",
    description:
      "21stCenturyGIS creates maps and analyzes data, understanding geographical relationships for decision support.",
    topics: [
      {
        details: [
          "Faster digitization tool for high productivity",
          "Geo-referencing of Raster & Vector",
          "Vector editing, Clip and Boolean operations",
        ],
        images: [
          {
            src: Landuse_BalupurMap,
            caption: "Land Use Map of Balupur",
          },
        ],
      },
      {
        details: [
          "Input or Import attribute data & Photograph in table for Query & Statistics",
          "Thematic Map: Choropleth, Chorochromatic, Unique Value, Dot Density, Sphere, Circle, Square, Triangle Diagram",
        ],
        images: [{ src: Thematic_Map, caption: "Thematic Map Example" }],
      },
      {
        details: [
          "Preparation of Composite & Stacked Bar, Pie Chart and embedding on map",
          "Graphical & Statistical Analysis",
          "Rezoning & Zone Statistics",
          "Vector Analysis: Buffer, Overlay",
        ],
        images: [
          {
            src: BufferImg,
            caption: "Buffer Analysis Example",
          },
        ],
      },
      {
        details: [
          "Network Analysis: Shortest Path, Closest Facility, Dynamic Segmentation",
          "Feature Density Analysis",
          "Morphometric Analysis: Relative Relief, Dissection Index, Ruggedness Index",
        ],
        images: [
          {
            src: Network_Analysis,
            caption: "Network Analysis Example",
          },
        ],
      },
      {
        details: [
          "Geo-coding of Tables",
          "Plotting of GPS Waypoints & Track lines",
          "Overlaying maps on Google Earth for comparison and updating",
        ],
        images: [
          {
            src: MorphometricAnalysisMap,
            caption: "Morphometric Analysis Map",
          },
        ],
      },
      {
        details: [
          "Single & Multiple map Layout with Scale bar, Legend, North Arrow, Graticule",
          "Export map in BMP, JPG, PNG, TIF & WMF format controlling size and resolution",
          "Print Preview & direct Print",
        ],
        images: [
          {
            src: GoogleEarth_Connectivity,
            caption: "Google Earth Connectivity",
          },
        ],
      },
    ],
  },
  {
    title: "Sub-Surface Mapping",
    description:
      "21stCenturyGIS visualizes, interprets, and represents sub-surface bore hole data.",
    topics: [
      {
        details: [
          "Litholog Plotting based on RL and Coarseness value",
          "Different types of Correlation Diagrams",
          "Vertical & Horizontal Scale",
        ],
        images: [{ src: Litholog, caption: "Litholog Visualization" }],
      },
      {
        details: [
          "Geological section Diagram with Scale",
          "Creation of Pattern and colour for Litho Units",
        ],
        images: [
          { src: Section_Diagram, caption: "Geological Section Diagram" },
        ],
      },
      {
        details: [
          "Geological Fence & Panel Diagram",
          "Fence & Section Label",
          "Geological Symbols",
        ],
        images: [
          { src: Fence_Section_Diagram, caption: "Fence Section Diagram" },
        ],
      },
    ],
  },
];

// Main ProductDetail Component
const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");
  const [visibleElements, setVisibleElements] = useState({});

  // Handle scrolling animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementId = el.dataset.id;

        // Element is visible when it's top is below 20% of viewport and bottom is above 80% of viewport
        const isVisible =
          rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;

        if (isVisible && !visibleElements[elementId]) {
          setVisibleElements((prev) => ({ ...prev, [elementId]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleElements]);

  // Handle image click to open modal
  const handleImageClick = (img, caption) => {
    setSelectedImage(img);
    setSelectedCaption(caption);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedCaption("");
    document.body.style.overflow = "auto"; // Enable scrolling again
  };

  const renderData = (data, sectionIndex) => {
    return (
      <div
        id={`section-${sectionIndex}`}
        className="container mx-auto p-4 bg-white rounded-xl shadow-lg mt-16 md:mt-24 transition-all duration-500 animate-on-scroll"
        data-id={`section-${sectionIndex}`}
      >
        {/* Section header with accent gradient - Using color vars */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 bg-mossGreen rounded-lg" />
          <div className="relative z-10 py-4 md:py-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-offWhite mb-3 md:mb-4">
              {data.title}
            </h2>
            <div className="w-16 md:w-20 h-1 bg-beige mx-auto mb-3 md:mb-4 rounded-full" />
            <p className="text-sm md:text-lg text-center text-offWhite px-2 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>
        </div>

        {data.topics.map((topic, topicIndex) => (
          <motion.div
            key={topicIndex}
            className="mb-8 md:mb-16 px-1 md:px-8 lg:px-20 animate-on-scroll"
            data-id={`topic-${sectionIndex}-${topicIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={
              visibleElements[`topic-${sectionIndex}-${topicIndex}`]
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.5, delay: 0.1 * topicIndex }}
          >
            {/* Topic box with subtle gradient background - Updated */}
            <div className="bg-gradient-to-br from-offWhite to-white rounded-xl shadow-md overflow-hidden">
              {/* Category header (if exists) - Updated with color vars */}
              {topic.category && (
                <div className="bg-oliveGreen bg-opacity-20 px-4 md:px-6 py-2 md:py-3 border-b border-oliveGreen border-opacity-30">
                  <h4 className="text-lg md:text-2xl font-semibold text-deepGreen">
                    {Array.isArray(topic.category)
                      ? topic.category.join(" & ")
                      : topic.category}
                  </h4>
                </div>
              )}

              {/* Content and images section with alternating layout, improved for mobile */}
              <div
                className={`flex flex-col md:flex-row md:items-start p-4 md:p-6 ${
                  topicIndex % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Text content section with card styling */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
                  <div className="rounded-lg p-3 md:p-5 h-full">
                    {topic.details &&
                      (topic.details_type === "processing_preparation" ? (
                        <ul className="space-y-3 md:space-y-4 text-gray-600">
                          <li className="flex items-center">
                            <div className="bg-oliveGreen text-darkGreen p-1 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 md:h-4 md:w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 pt-0.5">
                              <strong className="text-forestGreen">
                                Processing:
                              </strong>{" "}
                              <span className="text-sm md:text-base">
                                Pixel Profile, Band Combination, Spectral
                                Profile, Spectral Plot, Inquire Cursor, Opacity,
                                Swipe, Pixel Chart & Histogram Manipulation.
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center">
                            <div className="bg-oliveGreen text-darkGreen p-1 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 md:h-4 md:w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 pt-0.5">
                              <strong className="text-forestGreen">
                                Preparation:
                              </strong>{" "}
                              <span className="text-sm md:text-base">
                                Projection, Pan Merge, Mosaic, Subset, Resize &
                                False Colour Composite.
                              </span>
                            </div>
                          </li>
                        </ul>
                      ) : Array.isArray(topic.details) ? (
                        <ul className="space-y-2 md:space-y-3 text-gray-600">
                          {topic.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center">
                              <div className="bg-oliveGreen text-darkGreen p-1 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 md:h-4 md:w-4"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="text-sm md:text-base pt-0.5">
                                {detail}
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : typeof topic.details === "string" ? (
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {topic.details}
                        </p>
                      ) : (
                        <div className="text-gray-600">
                          {typeof topic.details === "object" &&
                          !Array.isArray(topic.details) ? (
                            Object.entries(topic.details).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="mb-3 md:mb-4 pb-3 md:pb-4 border-b border-beige last:border-0"
                                >
                                  <h5 className="text-base md:text-lg font-medium text-deepGreen mb-1 md:mb-2">
                                    {key}
                                  </h5>
                                  <p className="text-sm md:text-base text-gray-600">
                                    {value}
                                  </p>
                                </div>
                              )
                            )
                          ) : (
                            <p className="text-sm md:text-base">
                              {String(topic.details)}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Images section with improved mobile spacing */}
                {topic.images && (
                  <div className="w-full md:w-1/2 md:pl-4 mt-2 md:mt-0">
                    <div
                      className={`grid gap-3 md:gap-4 ${
                        topic.images.length === 1
                          ? "grid-cols-1"
                          : topic.images.length === 2
                          ? "grid-cols-2"
                          : "grid-cols-2"
                      }`}
                    >
                      {topic.images.map((imgObj, imgIndex) => (
                        <div key={imgIndex} className="flex flex-col">
                          <motion.div
                            className="relative overflow-hidden rounded-lg group"
                            whileHover={{
                              scale: 1.03,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <div
                              className="relative"
                              onClick={() =>
                                handleImageClick(imgObj.src, imgObj.caption)
                              }
                            >
                              <img
                                src={imgObj.src}
                                alt={imgObj.caption}
                                className="rounded-lg cursor-pointer w-full object-contain h-32 sm:h-40 md:h-48 lg:h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                              />
                              {/* Enhanced caption with reveal animation */}
                              <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="text-xs md:text-sm font-medium">
                                  {imgObj.caption}
                                </div>
                                <div className="text-xs text-gray-200 mt-1 hidden md:block">
                                  Click to enlarge
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-offWhite pt-6 md:pt-10">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {productData.map((section, index) => (
          <motion.div
            key={index}
            className="mb-12 md:mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {renderData(section, index)}
          </motion.div>
        ))}

        {/* Image Modal - Using AnimatePresence for smooth enter/exit animations */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-3 md:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.img
                    src={selectedImage}
                    alt={selectedCaption}
                    className="w-full object-contain max-h-[70vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  {/* Gradient overlay for caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkGreen to-transparent h-16 md:h-24 pointer-events-none" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <h3 className="text-lg md:text-2xl font-bold">
                    {selectedCaption}
                  </h3>
                </div>
                {/* Close button */}
                <button
                  className="absolute top-2 md:top-4 right-2 md:right-4 bg-deepGreen bg-opacity-70 hover:bg-opacity-90 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
