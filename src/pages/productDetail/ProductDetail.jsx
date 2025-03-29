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
      name: "21stCenturyGIS (Premium)",
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
      name: "The Premium Software For Remote Sensing",
      title: "Remote Sensing & Image Analysis",
      description:
        "21st CenturyGIS simplies image processing and interpretation, while maintaining integrity of geo-spatial data.",
      topics: [
        "Processing: Pixel Profile, Band Combination, Spectral Profile, Spectral Plot, Inquire Cursor, Opacity, Swipe, Pixel Chart & Histogram Manipulation.",
        "Preparation: Projection, Pan Merge, Mosaic, Subset, Resize & False Colour Composite.",
      ],
      image: img2,
    },
    {
      name: "GIS, Terrain Analysis & Sub-Surface Mapping",
      title: "Remote Sensing & Image Analysis",
      enhancement: [
        "Spatial Filter",
        "Contrast, Brightness",
        "Colour Transformation",
        "Intensity-Hue-Saturation",
      ],
      classification:
        "Unsupervised & Supervised, Signature Editor, Attribute Manager, Accuracy Assessment and Class Refinement with the help of ancillary data.",
      interpretation: [
        "Ratio Vegetation Index",
        "Normalized Differential Vegetation Index",
        "Soil-Adjusted Vegetation Index",
        "Transformed Vegetation Index",
        "Iron Oxide, Clay Minerals, Mineral Composite, Hydrothermal Composite",
        "Change Detection",
      ],

      image: img3,
    },
    {
      name: "The Premium Software For Remote Sensing",
      title: "GIS Mapping & Analysis",
      description:
        "21st CenturyGIS creates map and analyze data in an easy way, understanding geographical relationshiops and developing decision support.",
      topics: [
        "Faster digitization tool for high productivity",
        "Geo-referencing of Raster & Vector",
        "Vector editing, Clip and Boolean operations",
        "Input or Import attribute data & Photograph in table for Query & Statistics",
        "Thematic Map: Choropleth, Chorochromatic, Unique Value, Dot Density, Sphere, Circle, Square, Triangle Diagram",
        "Preparation of Composite & Stacked Bar, Pie Chart and embedding on map",
        "Graphical & Statistical Analysis",
        "Rezoning & Zone Statistics",
        "Vector Analysis: Buffer, Overlay",
      ],
      image: img4,
    },
    {
      name: "GIS, Terrain Analysis & Sub-Surface Mapping",
      title: "GIS Mapping & Analysis",
      topics: [
        "Network Analysis: Shortest Path, Closest Facility, Dynamic Segmentation",
        "Feature Density Analysis",
        "Morphometric Analysis: Relative Relief, Dissection Index, Ruggedness Index",
        "Geo-coding of Tables",
        "Plotting of GPS Waypoints & Track lines",
        "Overlaying maps on Google Earth for comparison and updating",
        "Single & Multiple map Layout with Scale bar, Legend, North Arrow, Graticule",
        "Export map in BMP, JPG, PNG, TIF & WMF format controlling size and resolution",
        "Print Preview & direct Print",
      ],
      image: img5,
    },
    {
      name: "GIS, Terrain Analysis & Sub-Surface Mapping",
      title: "Remote Sensing & Image Analysis",
      enhancement: [
        "Spatial Filter",
        "Contrast, Brightness",
        "Colour Transformation",
        "Intensity-Hue-Saturation",
      ],
      classification:
        "Unsupervised & Supervised, Signature Editor, Attribute Manager, Accuracy Assessment and Class Refinement with the help of ancillary data.",
      interpretation: [
        "Ratio Vegetation Index",
        "Normalized Differential Vegetation Index",
        "Soil-Adjusted Vegetation Index",
        "Transformed Vegetation Index",
        "Iron Oxide, Clay Minerals, Mineral Composite, Hydrothermal Composite",
        "Change Detection",
      ],
      image: img6,
    },
    {
      name: "GIS, Terrain Analysis & Sub-Surface Mapping",
      title: "Sub-Surface Mapping",
      description:
        "21st CenturyGIS software allows you to visualize, interpret and represent your sub-surface bore hole data.",
      topics: [
        "Litholog Plotting based on RL and Coarseness value",
        "Different types of Correlation Diagrams",
        "Vertical & Horizontal Scale",
        "Geological section Diagram with Scale",
        "Creation of Pattern and colour for Litho Units",
        "Geological Fence & Panel Diagram",
        "Fence & Section Label",
        "Geological Symbols",
      ],
      image: img7,
    },
    {
      name: "21stCenturyGIS (Premium)",
      technicalSupport:
        "Expert supports are provided to assist customers in successfully achieving their GIS goals.",
      academyInfo:
        "Offers a wide variety of instructor-led courses to keep GIS knowledge and skills up-to-date.",
      contactInfo: {
        address: "404, Baghajatin Place, Kolkata – 700086, West Bengal",
        mobile: "+91 9830379812 / 8617230347",
        email: ["21stcentgis@gmail.com", "pchakraborty_99@yahoo.com"],
        website: "www.21stcentgis.org",
      },
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
        <h1 className="text-4xl font-bold text-darkGreen text-center mb-16">
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
              {product.title && (
                <>
                  <h3 className="text-xl font-medium text-gray-600 mb-4">
                    {product.title}
                  </h3>
                </>
              )}
              {product.description && (
                <>
                  <p className="text-gray-700 text-lg mb-6">
                    {product.description}
                  </p>
                </>
              )}

              {product.enhancement && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2">
                    Enhancement
                  </h4>
                  <ul className="text-gray-700">
                    {product.interpretation.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

              {product.technicalSupport && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2 mt-2">
                    Technical Support
                  </h4>
                  <p className="text-gray-700">{product.technicalSupport}</p>
                </>
              )}
              {product.academyInfo && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2 mt-2">
                    GIS Academy
                  </h4>
                  <p className="text-gray-700">{product.academyInfo}</p>
                </>
              )}
              {product.contactInfo && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2 mt-2">
                    Contact Info
                  </h4>
                  <p className="text-gray-700">
                    Address: {product.contactInfo.address}
                  </p>
                  <p className="text-gray-700">
                    Mobile: {product.contactInfo.mobile}
                  </p>
                  <p className="text-gray-700">
                    Email: {product.contactInfo.email.join(", ")}
                  </p>
                  <p className="text-gray-700">
                    Website:{" "}
                    <a
                      href={`https://${product.contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.contactInfo.website}
                    </a>
                  </p>
                </>
              )}

              {/* Conditional Classification Section */}
              {product.classification && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2 mt-2">
                    Classification
                  </h4>
                  <p className="text-gray-700">{product.classification}</p>
                </>
              )}

              {product.interpretation && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2 mt-2">
                    Interpretation
                  </h4>
                  <ul className="text-gray-700">
                    {product.interpretation.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Key Topics Section */}
              {product.topics && (
                <>
                  <h4 className="text-lg font-semibold text-darkGreen mb-2">
                    Key Topics:
                  </h4>
                  <ul className="list-disc list-outside text-gray-700 pl-5">
                    {product.topics.map((topic, idx) => (
                      <li key={idx} className="break-words">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </>
              )}
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
