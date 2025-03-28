import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/src/assets/product/Brochure_page-0001.jpg";
import img2 from "/src/assets/product/Brochure_page-0002.jpg";
import img3 from "/src/assets/product/Brochure_page-0003.jpg";
import img4 from "/src/assets/product/Brochure_page-0004.jpg";
import img5 from "/src/assets/product/Brochure_page-0005.jpg";
import img6 from "/src/assets/product/Brochure_page-0006.jpg";
import img7 from "/src/assets/product/Brochure_page-0007.jpg";
import img8 from "/src/assets/product/Brochure_page-0008.jpg";
import Footer from "../../components/footer/Footer";

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const productDetails = [
    {
      name: "21st Century GIS (Premium)",
      title: "Advanced GIS Software for Decision-Making",
      description:
        "An advanced GIS software that integrates remote sensing and geospatial data analysis for improved decision-making.",
      topics: [
        "Remote Sensing Integration",
        "Enhanced Data Visualization",
        "Comprehensive Geospatial Solutions",
      ],
      image: img1,
    },
    {
      name: "Smart Terrain Analyzer",
      title: "Analyze Terrains with AI",
      description:
        "Smart Terrain Analyzer uses AI algorithms to analyze elevation, slope, and terrain features for construction and environmental planning.",
      topics: [
        "Elevation Modeling",
        "3D Terrain Visualization",
        "AI-based Analysis",
      ],
      image: img2,
    },
    {
      name: "GeoPredict AI",
      title: "Predict Future Trends",
      description:
        "GeoPredict AI uses machine learning to predict geographic patterns and urban growth for sustainable city planning.",
      topics: [
        "Urban Growth Prediction",
        "Disaster Management",
        "Climate Change Analysis",
      ],
      image: img3,
    },
    {
      name: "MapSync Cloud",
      title: "Collaborative Mapping Platform",
      description:
        "MapSync Cloud enables teams to collaborate on maps in real-time, supporting field data collection and synchronization.",
      topics: [
        "Real-time Collaboration",
        "Data Synchronization",
        "Field Survey Support",
      ],
      image: img4,
    },
    {
      name: "GeoRemote Pro",
      title: "Remote Sensing Data Analysis",
      description:
        "GeoRemote Pro is designed for analyzing remote sensing imagery to extract actionable insights.",
      topics: [
        "Satellite Image Processing",
        "Land Use Monitoring",
        "Vegetation Analysis",
      ],
      image: img5,
    },
    {
      name: "Spatial Insight 360",
      title: "Comprehensive Spatial Analytics",
      description:
        "Spatial Insight 360 offers in-depth spatial data analysis with AI-driven insights for strategic planning.",
      topics: [
        "Spatial AI Modeling",
        "Geostatistical Analysis",
        "Predictive Insights",
      ],
      image: img6,
    },
    {
      name: "GeoDrone Mapper",
      title: "Drone Mapping Solution",
      description:
        "GeoDrone Mapper is a drone-based mapping solution for capturing high-resolution geospatial data.",
      topics: ["Aerial Surveys", "3D Mapping", "Real-time Data Acquisition"],
      image: img7,
    },
    {
      name: "EarthSense Monitor",
      title: "Environmental Monitoring System",
      description:
        "EarthSense Monitor provides real-time environmental monitoring using satellite data and IoT sensors.",
      topics: [
        "Air Quality Monitoring",
        "Climate Tracking",
        "Natural Disaster Alerts",
      ],
      image: img8,
    },
  ];

  const handleMouseMove = (e) => {
    if (!isZoomed) return;

    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    // Calculate mouse position relative to the container
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    // Calculate percentage of mouse position within container
    const percentX = (x / containerRect.width) * 100;
    const percentY = (y / containerRect.height) * 100;

    // Move the image
    image.style.transformOrigin = `${percentX}% ${percentY}%`;
    image.style.transform = "scale(2)";
  };

  const handleMouseLeave = () => {
    if (!isZoomed) return;

    const image = imageRef.current;
    if (!image) return;

    image.style.transformOrigin = "center center";
    image.style.transform = "scale(1)";
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div className="min-h-screen p-10 bg-offWhite mt-16">
        <h1 className="text-5xl font-bold text-darkGreen text-center mb-16">
          Product Details
        </h1>

        {productDetails.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-12 mb-16 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section with Click to Zoom */}
            <div className="w-full md:w-1/2 flex justify-center cursor-pointer">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-[80%] h-[650px] rounded-lg shadow-lg mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProduct(product)}
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0
                  ? "border-l-4 border-darkGreen pl-8"
                  : "ml-16 border-r-4 border-darkGreen pr-8"
              }`}
            >
              <h2 className="text-3xl font-semibold text-darkGreen mb-2">
                {product.name}
              </h2>
              <h3 className="text-xl font-medium text-gray-600 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                {product.description}
              </p>

              <h4 className="text-lg font-semibold text-darkGreen mb-2">
                Key Topics:
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                {product.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Modal with Zoom Functionality */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-lg z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProduct(null);
                setIsZoomed(false);
              }}
            >
              <motion.div
                className="relative rounded-lg p-8 max-w-4xl w-full bg-white shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-2xl transition-all duration-300"
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsZoomed(false);
                  }}
                >
                  ✕
                </button>

                {/* Zoom Toggle Button */}
                <button
                  className="absolute top-4 right-16 text-white text-sm bg-darkGreen z-50  px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
                  onClick={toggleZoom}
                >
                  {isZoomed ? "Disable Zoom" : "Enable Zoom"}
                </button>

                {/* Image Container */}
                <div
                  ref={containerRef}
                  className={`relative w-full h-[80vh] overflow-hidden rounded-lg border-4 border-darkGreen shadow-lg ${
                    isZoomed ? "cursor-zoom-in" : "cursor-default"
                  }`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    ref={imageRef}
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain transition-transform duration-300"
                    style={{
                      transformOrigin: "center center",
                      transition: "transform 0.3s ease-out",
                    }}
                  />
                </div>

                {/* Product Info Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                  <p className="mt-2 text-lg">{selectedProduct.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
