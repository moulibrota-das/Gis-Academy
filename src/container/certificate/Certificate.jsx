import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import pdf1 from "../../assets/documents/21stCenturyGIS Premium Brochure.pdf";
import pdf2 from "../../assets/documents/company_profile.pdf";
import pdf3 from "../../assets/documents/gst.pdf";
import pdf4 from "../../assets/documents/iso_certificate.pdf";
import pdf5 from "../../assets/documents/kmc_trade_licence_2025.pdf";
import pdf6 from "../../assets/documents/professional_tax_certificate.pdf";
import pdf7 from "../../assets/documents/resume.pdf";
import pdf8 from "../../assets/documents/udyam_certificate.pdf";
import img1 from "../../assets/images/Documents/21stcentury_gis_brochure.jpg";
import img2 from "../../assets/images/Documents/company_profile.jpg";
import img3 from "../../assets/images/Documents/gst.jpg";
import img4 from "../../assets/images/Documents/iso_certificate.jpg";
import img5 from "../../assets/images/Documents/kmc_trade_licence_2025.jpg";
import img6 from "../../assets/images/Documents/professional_tax_certificate.jpg";
import img7 from "../../assets/images/Documents/resume.jpg";
import img8 from "../../assets/images/Documents/udyam_certificate.jpg";

// PDF Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1 - GIS Training Overview</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2 - Company Brochure Overview</Text>
      </View>
    </Page>
  </Document>
);

// PDF Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// PDF Data
const document_details = [
  {
    title: "GIS Training Overview",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf1,
    imgUrl: img1,
  },
  {
    title: "Company Profile",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf2,
    imgUrl: img2,
  },
  {
    title: "GST",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf3,
    imgUrl: img3,
  },
  {
    title: "ISO Certificate",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf4,
    imgUrl: img4,
  },
  {
    title: "KMC Trade Licence",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf5,
    imgUrl: img5,
  },
  {
    title: "Professional Tax Certificate",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf6,
    imgUrl: img6,
  },
  {
    title: "Udyam Certificate",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf8,
    imgUrl: img8,
  },
  {
    title: "Resume",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf7,
    imgUrl: img7,
  },
];

export default function Certificate() {
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const handleViewPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="container mx-auto p-6 md:pt-16 md:pb-16 flex flex-col justify-center min-h-[800px] ">
      <div className="flex flex-col items-center mb-8">
        <motion.h2
          className="text-4xl md:text-4xl font-semibold text-darkGreen text-center relative z-[1]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Documents
        </motion.h2>

        <motion.div
          className="w-[100px] h-1 bg-darkGreen my-2 relative z-[1]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {document_details.map((doc, index) => (
          <div
            key={index}
            className="relative h-[400px] rounded-md shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${doc.imgUrl})`,
              }}
            />

            {/* Gradient Overlay for the Bottom 30% */}
            <div className="absolute bottom-0 w-full h-[30%] bg-black/50" />

            {/* Document Name and Button Section */}
            <div className="absolute bottom-0 w-full p-5 text-center">
              {/* Document Name */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {doc.title}
              </h3>

              {/* View Document Button */}
              <button
                className="bg-white text-darkGreen px-5 py-2 rounded-full text-sm font-semibold hover:bg-mossGreen hover:text-white transition-colors duration-300"
                onClick={() => handleViewPdf(doc.pdfUrl)}
              >
                View Document
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPdfViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Generated PDF</h3>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setShowPdfViewer(false)}
              >
                Close
              </button>
            </div>
            <PDFViewer width="100%" height="600px">
              <MyDocument />
            </PDFViewer>
          </div>
        </div>
      )}
    </div>
  );
}
