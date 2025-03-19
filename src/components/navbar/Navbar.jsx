import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImage from "/src/assets/logo.png";

const navItems = ["Home", "Product", "About", "Contact"];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-offWhite shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4 max-w-7xl">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex items-center"
        >
          <img src={logoImage} alt="logo" className="w-28 h-12 md:w-36 md:h-12" />
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-forestGreen hover:text-mossGreen transition font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeInOut" }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-forestGreen p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {mobileMenuOpen ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              initial={{ rotate: 180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        id="mobileMenu"
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-0 right-0 w-64 h-full bg-offWhite py-6 px-6 rounded-l-lg shadow-xl"
          initial={{ x: "100%" }}
          animate={{ x: mobileMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <button className="absolute top-3 right-3 text-darkGreen" onClick={() => setMobileMenuOpen(false)}>
            ✖
          </button>
          <div className="flex flex-col space-y-4 mt-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-forestGreen hover:text-mossGreen transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeInOut" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default NavBar;