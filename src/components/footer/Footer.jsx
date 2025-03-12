import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-forestGreen text-off-white py-10 font-body">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Google Map Embed */}
          <div>
            <div className="mt-2">
              <iframe
                className="w-full h-64 rounded-md border-2 border-green"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509092!2d144.9537353153217!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f4cfcb%3A0x2c0a2a4b3123a4b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1613987579867!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold uppercase text-beige font-heading">
              Contact Us
            </h2>
            <p className="mt-2 text-beige">1234 Street Name, City, Country</p>
            <p className="text-beige">Email: contact@example.com</p>
            <p className="text-beige">Phone: +123 456 7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold uppercase text-beige font-heading">
              Quick Links
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-beige hover:text-green">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-green">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-green">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-green">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="#" className="text-beige hover:text-green">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-beige hover:text-green">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-beige hover:text-green">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-beige hover:text-green">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-beige font-heading">
          © {new Date().getFullYear()} @GIS Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
