import React from "react";
import Card from "../../components/card/Card"; // Import the Card component

const Products = () => {
  return (
    <section className="bg-offWhite min-h-screen flex flex-col items-center px-6 md:px-16 py-20">
      {/* Title and Description */}
      <h2 className="text-4xl md:text-5xl font-semibold text-darkGreen text-center">
        Products
      </h2>
      <div className="w-52 h-1 bg-darkGreen my-2"></div>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
        <Card
          title="GIS Basics"
          description="Learn the fundamentals of Geographic Information Systems."
          bgColor="bg-mossGreen"
        />

        <Card
          title="Spatial Analysis"
          description="Learn how to analyze spatial data effectively."
          bgColor="bg-mossGreen"
        />
      </div>
    </section>
  );
};

export default Products;
