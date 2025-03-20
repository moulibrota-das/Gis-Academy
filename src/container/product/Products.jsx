import React from "react";
import Card from "../../components/card/Card"; // Import the Card component
import ProductCarousel from "../../components/productCarousel/ProductCarousel";

const Products = () => {
  return (
    <section className="bg-custom-gradient-top min-h-screen flex flex-col items-center px-6 md:px-16 py-20">
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
      <div className="flex justify-center">
        <ProductCarousel />
      </div>
    </section>
  );
};

export default Products;
