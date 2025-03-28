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
import * as pdfjs from "pdfjs-dist";
import pdf1 from "../../assets/documents/21stcentury_gis_brochure.pdf";
import pdf2 from "../../assets/documents/company_profile.pdf";
import pdf3 from "../../assets/documents/gst.pdf";
import pdf4 from "../../assets/documents/iso_certificate.pdf";
import pdf5 from "../../assets/documents/kmc_trade_licence.pdf";
import pdf6 from "../../assets/documents/professional_tax_certificate.pdf";
import pdf7 from "../../assets/documents/resume.pdf";
import pdf8 from "../../assets/documents/udyam_certificate.pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

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
    title: "GIS Training Manual",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf1,
  },
  {
    title: "Company Brochure",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf2,
  },
  {
    title: "GIS Training Manual",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf3,
  },
  {
    title: "Company Brochure",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf4,
  },
  {
    title: "GIS Training Manual",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf5,
  },
  {
    title: "Company Brochure",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf6,
  },
  {
    title: "GIS Training Manual",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: pdf7,
  },
  {
    title: "Company Brochure",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: pdf8,
  },
];

export default function Certificate() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [thumbnails, setThumbnails] = useState({});

  useEffect(() => {
    const generateThumbnails = async () => {
      const thumbnailsObj = {};
      for (const doc of document_details) {
        try {
          const pdf = await pdfjs.getDocument(doc.pdfUrl).promise;
          const page = await pdf.getPage(1);

          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise;
          thumbnailsObj[doc.title] = canvas.toDataURL("image/png");
        } catch (error) {
          console.error(`Error generating thumbnail for ${doc.title}`, error);
        }
      }
      setThumbnails(thumbnailsObj);
    };

    generateThumbnails();
  }, []);

  const handleViewPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setShowPdfViewer(false);
  };

  return (
    <div className="container mx-auto p-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {document_details.map((doc, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-semibold mt-2">{doc.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleViewPdf(doc.pdfUrl)}
            >
              View PDF
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
              onClick={() => setShowPdfViewer(true)}
            >
              Generate PDF
            </button>
          </div>
        ))}
      </div>

      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">PDF Viewer</h3>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setSelectedPdf(null)}
              >
                Close
              </button>
            </div>
            <iframe
              src={selectedPdf}
              className="w-full h-[80vh]"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}

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
