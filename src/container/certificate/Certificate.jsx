import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../../public/assets/documents/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const document_details = [
  {
    title: "GIS Training Manual",
    description: "A comprehensive guide to GIS mapping techniques.",
    pdfUrl: "/assets/documents/gis_training_manual.pdf",
  },
  {
    title: "Company Brochure",
    description: "Learn more about our GIS services and offerings.",
    pdfUrl: "https://www.fsa.usda.gov/Internet/FSA_File/tech_assist.pdf",
  },
];

export default function Certificate() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }  

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Document</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {document_details.map((doc, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-32 h-40 overflow-hidden border rounded shadow">
              <Document
                file={resume}
                onLoadSuccess={onDocumentLoadSuccess}>
              
                <Page pageNumber={1} width={128} />
              </Document>
            </div>
            <h3 className="text-lg font-semibold mt-2">{doc.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedPdf(resume)}
            >
              View PDF
            </button>
          </div>
        ))}
      </div>
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setSelectedPdf(null)}
            >
              Close
            </button>
            <Document file={selectedPdf}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={index} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      )}
    </div>
  );
}