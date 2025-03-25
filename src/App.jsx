import "./App.css";
import Introduction from "./container/introduction/Introduction";
import Hero from "./container/hero/Hero";
import Services from "./container/services/Services";
import Products from "./container/product/Products";
import NavBar from "./components/navbar/Navbar";
import Certificate from "./container/certificate/Certificate";
import Footer from "./components/footer/Footer";
import ContactUs from "./container/contact/ContactUs";
import ProprietorInfo from "./container/ProprietorInfo/ProprietorInfo";
import Client from "./container/client/ClientsPage";
import ProjectsPage from "./container/project/ProjectsPage";

function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <Introduction />
        <Services />
        <Products />
        <Certificate />
        <Client />
        <ProjectsPage />
        <ProprietorInfo />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default App;
