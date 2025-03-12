import React from "react";
import Card from "../../components/card/Card"; // Import the Card component

const Certificate = () => {
  // Certificate data with titles and descriptions
  const certificates = [
    {
      id: 1,
      title: "Certificate One",
      description: "Description for the first certificate.",
      bgColor: "bg-mossGreen",
    },
    {
      id: 2,
      title: "Certificate Two",
      description:
        "Description for the second certificate. This one is featured.",
      bgColor: "bg-mossGreen",
    },
    {
      id: 3,
      title: "Certificate Three",
      description: "Description for the third certificate.",
      bgColor: "bg-mossGreen",
    },
  ];

  return (
    <section className="bg-offWhite min-h-screen flex flex-col items-center px-6 md:px-16 py-20">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-semibold text-darkGreen text-center">
        Certificates
      </h2>
      <div className="w-32 h-[2px] bg-darkGreen my-3"></div>

      {/* Certificates Grid - Properly aligned */}
      <div className="w-full max-w-5xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`w-full flex justify-center ${
                index === 1
                  ? "items-center scale-110 mt-8 mb-8" // Middle certificate (bigger, center-aligned)
                  : "items-center mt-2" // Side certificates (smaller, aligned in middle)
              }`}
            >
              <Card
                title={certificate.title}
                description={certificate.description}
                bgColor={certificate.bgColor}
                className={`${index === 1 ? "h-96 w-72" : "h-80 w-60"}`} // Middle card is larger
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
