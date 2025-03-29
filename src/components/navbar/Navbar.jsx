import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaProductHunt,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logoImage from "/src/assets/images/Logo_GISAcademy.png";

const navItems = [
  { name: "Home", icon: <FaHome />, link: "/" },
  { name: "Courses", icon: <FaHome />, link: "#courses" },
  { name: "Product", icon: <FaProductHunt />, link: "#products" },
  { name: "Projects", icon: <FaProductHunt />, link: "#projects" },
  { name: "About", icon: <FaInfoCircle />, link: "#about" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileMenuOpen && !event.target.closest("#mobileMenu")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full ${
        isScrolled ? "bg-white/50 backdrop-blur-md shadow-md" : "bg-transparent"
      } transition-all`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-3.5 max-w-7xl">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetSection = document.querySelector("#home");
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <img
            src={logoImage}
            alt="logo"
            className="w-10 h-10 rounded-lg object-contain"
          />
          <div
            className={`${
              isScrolled ? "text-deepGreen" : "text-offWhite"
            } font-bold text-[13px] tracking-wide text-start leading-tight`}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
            }}
          >
            <span className="block">21ST CENTURY</span>
            <span className="block">GIS ACADEMY</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {item.link.startsWith("#") ? (
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetSection = document.querySelector(item.link);
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`${
                    isScrolled
                      ? "text-deepGreen hover:text-mossGreen"
                      : "text-offWhite hover:text-beige"
                  }`}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.link}
                  className={`${
                    isScrolled
                      ? "text-darkGreen hover:text-mossGreen"
                      : "text-offWhite hover:text-beige"
                  }`}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-darkGreen text-2xl"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sliding Half-Screen Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "60%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 w-2/5 h-full bg-white z-50 shadow-lg flex flex-col p-8"
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-3xl text-darkGreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Mobile Nav Items */}
              <div className="mt-16 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={item.link}
                      className="flex items-center gap-3 text-darkGreen hover:text-mossGreen text-xl font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon} {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
