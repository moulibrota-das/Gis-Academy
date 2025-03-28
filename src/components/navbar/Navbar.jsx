import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, FaProductHunt, FaInfoCircle, FaEnvelope, 
  FaBars, FaTimes 
} from "react-icons/fa";
import logoImage from "/src/assets/images/Logo_GISAcademy.png";

const navItems = [
  { name: "Home", icon: <FaHome />, link: "#home" },
  { name: "Courses", icon: <FaHome />, link: "#courses" },
  { name: "Product", icon: <FaProductHunt />, link: "#products" },
  { name: "Projects", icon: <FaProductHunt />, link: "#projects" },
  { name: "About", icon: <FaInfoCircle />, link: "#about" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-white/50 backdrop-blur-md shadow-md transition-all">
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
          <img src={logoImage} alt="logo" className="w-10 h-10 rounded-lg object-contain" />
          <div className="text-darkGreen font-bold text-xl tracking-wide">
            21st Century <span className="text-mossGreen">GIS Academy</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="flex items-center gap-2 text-darkGreen hover:text-mossGreen transition font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetSection = document.querySelector(item.link);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
            >
              {/* {item.icon} */}
              {item.name}
            </motion.a>
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
              onClick={() => setMobileMenuOpen(false)} // Closes when clicking outside
            />

            {/* Sliding Half-Screen Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "60%" }}  // Covers 40% of the screen
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
                  <motion.a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-3 text-darkGreen hover:text-mossGreen text-xl font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                  >
                    {item.icon} {item.name}
                  </motion.a>
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