import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaProductHunt,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaBook,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logoImage from "/src/assets/images/Logo_GISAcademy.png";

const navItems = [
  { name: "Home", icon: <FaHome />, link: "/" },
  { name: "Courses", icon: <FaBook />, link: "#courses" },
  { name: "Products", icon: <FaProductHunt />, link: "#products" },
  { name: "Services", icon: <FaTools />, link: "#services" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
  { name: "About", icon: <FaInfoCircle />, link: "#about" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

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
      if (
        mobileMenuOpen &&
        !event.target.closest("#mobileMenu") &&
        !event.target.closest("#hamburgerBtn")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileMenuOpen]);

  // Smooth scroll for hash links
  const handleSmoothScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(link);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    } else {
      navigate(link);
      setMobileMenuOpen(false);
    }
  };

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
              <a
                href={item.link}
                onClick={(e) => handleSmoothScroll(e, item.link)}
                className={`${
                  isScrolled
                    ? "text-deepGreen hover:text-mossGreen"
                    : "text-offWhite hover:text-beige"
                }`}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          id="hamburgerBtn"
          className="md:hidden text-darkGreen text-2xl"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen((prev) => !prev);
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 w-full mx-auto bg-offWhite shadow-md p-6 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.link}
                  onClick={(e) => handleSmoothScroll(e, item.link)}
                  className="flex items-center gap-3 text-darkGreen hover:text-mossGreen text-xl font-semibold py-2"
                >
                  {item.icon} {item.name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
