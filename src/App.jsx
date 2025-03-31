import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Introduction from "./container/introduction/Introduction";
import Hero from "./container/hero/Hero";
import Courses from "./container/courses/Courses";
import Products from "./container/product/Products";
import NavBar from "./components/navbar/Navbar";
import Certificate from "./container/certificate/Certificate";
import Footer from "./components/footer/Footer";
import ContactUs from "./container/contact/ContactUs";
import ProprietorInfo from "./container/ProprietorInfo/ProprietorInfo";
import Client from "./container/client/ClientsPage";
import ProjectsPage from "./container/project/ProjectsPage";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Services from "./container/services/Services";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Check scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <main className=" min-h-screen ">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Introduction />
                <Products />
                <Services />
                <Courses />
                <Certificate />

                <Client />
                <ProjectsPage />
                <ProprietorInfo />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>

        {/* Back to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-xl 
    bg-gradient-to-br from-forestGreen to-mossGreen text-white shadow-xl 
    hover:scale-110 hover:shadow-2xl hover:from-mossGreen hover:to-lightGreen
    transition-transform duration-500 backdrop-blur-md bg-opacity-80 
    animate-bounce hover:animate-none z-49"
            aria-label="Back to Top"
          >
            <FaArrowUp size={24} />
          </button>
        )}
      </main>
    </Router>
  );
}

export default App;
