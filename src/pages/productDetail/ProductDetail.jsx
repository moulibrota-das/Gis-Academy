import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/footer/Footer";

// Image Imports (Updated for cleaner structure)
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

// Data for Product Sections (Updated)
const productData = [
  {
    title: "Remote Sensing & Image Analysis",
    description: "21stCenturyGIS simplifies image processing and interpretation, while maintaining the integrity of geo-spatial data.",
    topics: [
      {
        category: ["Processing", "Preparation"],
        details: {
          Processing: "Pixel Profile, Band Combination, Spectral Profile, Spectral Plot, Inquire Cursor, Opacity, Swipe, Pixel Chart & Histogram Manipulation.",
          Preparation: "Projection, Pan Merge, Mosaic, Subset, Resize & False Colour Composite.",
        },
        details_type: "processing_preparation",
        images: [Mosaic1, Mosaic2, PImage, Pan, PanMerge, PixelProfile],
      },
      {
        category: "Enhancement",
        details: "Spatial Filter, Contrast, Brightness, Colour Transformation, Intensity-Hue-Saturation",
        details_type: "text",
        images: [Intensity_Hue_Saturation],
      },
      {
        category: "Classification",
        details: "Unsupervised & Supervised, Signature Editor, Attribute Manager, Accuracy Assessment and Class Refinement with the help of ancillary data.",
        details_type: "text",
        images: [DigitalClassification1],
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
        images: [AttributeManager],
      },
    ],
  },
  {
    title: "GIS Mapping & Analysis",
    description: "21stCenturyGIS creates maps and analyzes data, understanding geographical relationships for decision support.",
    topics: [
      {
        details: [
          "Faster digitization tool for high productivity",
          "Geo-referencing of Raster & Vector",
          "Vector editing, Clip and Boolean operations",
        ],
        images: [BufferImg],
      },
      {
        details: [
          "Input or Import attribute data & Photograph in table for Query & Statistics",
          "Thematic Map: Choropleth, Chorochromatic, Unique Value, Dot Density, Sphere, Circle, Square, Triangle Diagram",
          "Preparation of Composite & Stacked Bar, Pie Chart and embedding on map",
        ],
        images: [Landuse_BalupurMap],
      },
      {
        details: [
          "Graphical & Statistical Analysis",
          "Rezoning & Zone Statistics",
          "Vector Analysis: Buffer, Overlay",
        ],
        images: [Thematic_Map],
      },
      {
        details: [
          "Network Analysis: Shortest Path, Closest Facility, Dynamic Segmentation",
          "Feature Density Analysis",
          "Morphometric Analysis: Relative Relief, Dissection Index, Ruggedness Index",
        ],
        images: [GoogleEarth_Connectivity],
      },
      {
        details: [
          "Geo-coding of Tables",
          "Plotting of GPS Waypoints & Track lines",
          "Overlaying maps on Google Earth for comparison and updating",
        ],
        images: [Network_Analysis],
      },
      {
        details: [
          "Single & Multiple map Layout with Scale bar, Legend, North Arrow, Graticule",
          "Export map in BMP, JPG, PNG, TIF & WMF format controlling size and resolution",
          "Print Preview & direct Print",
        ],
        images: [MorphometricAnalysisMap],
      },
    ],
  },
  {
    title: "Sub-Surface Mapping",
    description: "21stCenturyGIS visualizes, interprets, and represents sub-surface bore hole data.",
    topics: [
      {
        details: [
          "Litholog Plotting based on RL and Coarseness value",
          "Different types of Correlation Diagrams",
          "Vertical & Horizontal Scale",
        ],
        images: [Fence_Section_Diagram],
      },
      {
        details: [
          "Geological section Diagram with Scale",
          "Creation of Pattern and colour for Litho Units",
        ],
        images: [Section_Diagram],
      },
      {
        details: [
          "Geological Fence & Panel Diagram",
          "Fence & Section Label",
          "Geological Symbols",
        ],
        images: [Litholog],
      },
    ],
  },
];

// Main ProductDetail Component
const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderData = (data) => {
    return (
      <div className="container mx-auto p-10 bg-offWhite mt-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">{data.title}</h2>
        <p className="text-lg text-center text-gray-600 mb-12">{data.description}</p>

        {data.topics.map((topic, topicIndex) => {
          const textPlacement = topicIndex % 2 === 0 ? "left" : "right";
          return (
            <div key={topicIndex} className="flex flex-col md:flex-row mb-10 items-center px-20">
              {textPlacement === "left" && (
                <div className="w-1/2 md:w-1/2 px-4">
                  {topic.category && (
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                      {Array.isArray(topic.category) ? topic.category.join(", ") : topic.category}
                    </h4>
                  )}
                  {topic.details && (
                    topic.details_type === "processing_preparation" ? (
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>
                          <strong>Processing:</strong> Pixel Profile, Band Combination, Spectral Profile, Spectral Plot, Inquire Cursor, Opacity, Swipe, Pixel Chart & Histogram Manipulation.
                        </li>
                        <li>
                          <strong>Preparation:</strong> Projection, Pan Merge, Mosaic, Subset, Resize & False Colour Composite.
                        </li>
                      </ul>
                    ) : Array.isArray(topic.details) ? (
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        {topic.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    ) : typeof topic.details === "string" ? (
                      <p className="text-lg text-gray-600 mb-4">{topic.details}</p>
                    ) : (
                      <div className="text-lg text-gray-600 mb-4">
                        {typeof topic.details === "object" && !Array.isArray(topic.details)
                          ? Object.entries(topic.details).map(([key, value]) => (
                              <p key={key}>
                                <strong>{key}:</strong> {value}
                              </p>
                            ))
                          : <p>{String(topic.details)}</p>}
                      </div>
                    )
                  )}
                </div>
              )}

              {topic.images && (
                <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {topic.images.map((img, imgIndex) => (
                      <motion.img
                        key={imgIndex}
                        src={img}
                        alt={`topic-${topicIndex}-${imgIndex}`}
                        className="rounded-lg shadow-lg cursor-pointer w-full object-contain max-h-72 hover:scale-105 transition-transform duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {textPlacement === "right" && (
                <div className="w-full md:w-1/2 px-4">
                  {topic.category && (
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                      {Array.isArray(topic.category) ? topic.category.join(", ") : topic.category}
                    </h4>
                  )}
                  {topic.details && (
                    topic.details_type === "processing_preparation" ? (
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>
                          <strong>Processing:</strong> Pixel Profile, Band Combination, Spectral Profile, Spectral Plot, Inquire Cursor, Opacity, Swipe, Pixel Chart & Histogram Manipulation.
                        </li>
                        <li>
                          <strong>Preparation:</strong> Projection, Pan Merge, Mosaic, Subset, Resize & False Colour Composite.
                        </li>
                      </ul>
                    ) : Array.isArray(topic.details) ? (
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        {topic.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    ) : typeof topic.details === "string" ? (
                      <p className="text-lg text-gray-600 mb-4">{topic.details}</p>
                    ) : (
                      <div className="text-lg text-gray-600 mb-4">
                        {typeof topic.details === "object" && !Array.isArray(topic.details)
                          ? Object.entries(topic.details).map(([key, value]) => (
                              <p key={key}>
                                <strong>{key}:</strong> {value}
                              </p>
                            ))
                          : <p>{String(topic.details)}</p>}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {productData.map((section) => renderData(section))}

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-3xl max-h-screen object-contain"
              whileTap={{ scale: 0.9 }}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;