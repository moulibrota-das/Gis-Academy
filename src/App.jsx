import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
      </main>
    </Router>
  );
}

export default App;
