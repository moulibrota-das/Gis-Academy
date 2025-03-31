import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/src/assets/product/brochure/page1/Brochure_page1.jpg";
// brochure page 2
import Mosaic1 from "/src/assets/product/brochure/page2/Mosaic1.jpg";
import Mosaic2 from "/src/assets/product/brochure/page2/Mosaic2.jpg";
import PImage from "/src/assets/product/brochure/page2/P_Image.jpg";
import Pan from "/src/assets/product/brochure/page2/PAN.jpg";
import PanMerge from "/src/assets/product/brochure/page2/PanMerge.jpg";
import PixelProfile from "/src/assets/product/brochure/page2/PixelProfile2.png";
// brochure page 3
import AttributeManager from "/src/assets/product/brochure/page3/AttributeManager.jpg";
import DigitalClassification1 from "/src/assets/product/brochure/page3/DigitalClassification1.jpg";
import Intensity_Hue_Saturation from "/src/assets/product/brochure/page3/Intensity_Hue_Saturation.jpg";
// brochure page 4
import BufferImg from "/src/assets/product/brochure/page4/Buffer.jpg";
import Landuse_BalupurMap from "/src/assets/product/brochure/page4/Landuse_BalupurMap.jpg";
import Thematic_Map from "/src/assets/product/brochure/page4/Thematic_Map.jpg";
// brochure page 5
import GoogleEarth_Connectivity from "/src/assets/product/brochure/page5/GoogleEarth_Connectivity-2.jpg";
import MorphometricAnalysisMap from "/src/assets/product/brochure/page5/MorphometricAnalysisMap.png";
import Network_Analysis from "/src/assets/product/brochure/page5/Network_Analysis.jpg";
// brochure page 7
import Fence_Section_Diagram from "/src/assets/product/brochure/page7/Fence_Section_Diagram.jpg";
import Litholog from "/src/assets/product/brochure/page7/Litholog.jpg";
import Section_Diagram from "/src/assets/product/brochure/page7/Section_Diagram.jpg";
import img8 from "/src/assets/product/Brochure_page-0008.jpg";
import Footer from "../../components/footer/Footer";

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
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
        "21stCenturyGIS simplies image processing and interpretation, while maintaining integrity of geo-spatial data.",
      topics: [
        "Processing: Pixel Profile, Band Combination, Spectral Profile, Spectral Plot, Inquire Cursor, Opacity, Swipe, Pixel Chart & Histogram Manipulation.",
        "Preparation: Projection, Pan Merge, Mosaic, Subset, Resize & False Colour Composite.",
      ],
      image: [Mosaic1, Mosaic2, PImage, Pan, PixelProfile, PanMerge],
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

      image: [
        AttributeManager,
        DigitalClassification1,
        Intensity_Hue_Saturation,
      ],
    },
    {
      name: "The Premium Software For Remote Sensing",
      title: "GIS Mapping & Analysis",
      description:
        "21stCenturyGIS creates map and analyze data in an easy way, understanding geographical relationshiops and developing decision support.",
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
      image: [BufferImg, Landuse_BalupurMap, Thematic_Map],
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
      image: [
        GoogleEarth_Connectivity,
        Network_Analysis,
        MorphometricAnalysisMap,
      ],
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
      image: [
        AttributeManager,
        DigitalClassification1,
        Intensity_Hue_Saturation,
      ],
    },
    {
      name: "GIS, Terrain Analysis & Sub-Surface Mapping",
      title: "Sub-Surface Mapping",
      description:
        "21stCenturyGIS software allows you to visualize, interpret and represent your sub-surface bore hole data.",
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
      image: [Fence_Section_Diagram, Section_Diagram, Litholog],
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
        website: "www.21stcenturygis.org",
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
      <div className="container mx-auto p-10 bg-offWhite mt-16">
        <button
          onClick={() => window.history.back()}
          className="mb-8 px-4 py-1 bg-forestGreen text-offWhite rounded-full shadow-md hover:bg-mossGreen transition-all duration-300 font-semibold text-lg"
        >
          ← Back
        </button>
        {productDetails.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center mb-16 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* First Section: Background Image with Centered Content */}
            {index === 0 ? (
              <div
                className="w-full h-[600px] bg-cover bg-center rounded-lg shadow-lg relative"
                style={{
                  backgroundImage: `url(${
                    Array.isArray(product.image)
                      ? product.image[0]
                      : product.image
                  })`,
                }}
              >
                {/* Overlay with Opacity */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg" />

                {/* Content on top of the Overlay */}
                <div className="relative flex items-center justify-center h-full p-10">
                  <div className="p-10 rounded-lg max-w-2xl text-center">
                    <h2 className="text-4xl font-montserrat font-semibold text-offWhite mb-4">
                      {product.name}
                    </h2>
                    {product.title && (
                      <h3 className="text-2xl font-medium text-offWhite mb-6">
                        {product.title}
                      </h3>
                    )}
                    {product.description && (
                      <p className="text-offWhite text-lg mb-6">
                        {product.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Standard Image and Content Layout for Other Products
              <div className="w-full md:w-1/2 flex justify-center p-10">
                {Array.isArray(product.image) ? (
                  <div
                    className={`grid gap-6 ${
                      product.image.length === 3
                        ? "grid-cols-2"
                        : "grid-cols-2 md:grid-cols-3"
                    }`}
                  >
                    {product.image.map((img, imgIndex) => (
                      <motion.img
                        key={imgIndex}
                        src={img}
                        alt={`${product.name}-${imgIndex}`}
                        className={`w-full h-auto max-h-[400px] object-contain rounded-lg cursor-pointer ${
                          product.image.length === 3 && imgIndex === 2
                            ? "col-span-2 mx-auto"
                            : ""
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                ) : (
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-[60%] rounded-lg mx-auto h-auto max-h-[600px] cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(product.image)}
                  />
                )}
              </div>
            )}

            {index !== 0 && (
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "pl-8" : "ml-16 pr-8"
                }`}
              >
                <h2 className="text-3xl font-montserrat font-semibold text-darkGreen mb-2">
                  {product.name}
                </h2>
                {product.title && (
                  <h3 className="text-xl font-medium text-gray-600 mb-4">
                    {product.title}
                  </h3>
                )}

                {product.description && (
                  <p className="text-gray-700 text-lg mb-6">
                    {product.description}
                  </p>
                )}

                {product.enhancement && (
                  <>
                    <h4 className="text-lg font-semibold text-darkGreen mb-2">
                      Enhancement
                    </h4>
                    <ul className="text-gray-700">
                      {product.enhancement.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </>
                )}

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
                        className="text-darkGreen underline"
                      >
                        {product.contactInfo.website}
                      </a>
                    </p>
                  </>
                )}

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
            )}
          </div>
        ))}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)} // Close on click outside
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged Product"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
