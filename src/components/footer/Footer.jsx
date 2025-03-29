import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-forestGreen  text-off-white py-16 font-body">
      <div className="container mx-auto px-6 ">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold uppercase text-white font-heading mb-6">
              Contact Us
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-2">
              1234 Street Name, City, Country
            </p>
            <p className="text-gray-300 text-sm md:text-base mb-2">
              Email:
              <a
                href="mailto:contact@example.com"
                className="text-green-400 hover:text-green-300"
              >
                {" "}
                contact@example.com
              </a>
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Phone:
              <a
                href="tel:+1234567890"
                className="text-green-400 hover:text-green-300"
              >
                {" "}
                +123 456 7890
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold uppercase text-white font-heading mb-6">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-semibold uppercase text-white font-heading mb-6">
              Subscribe
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Stay updated with our latest news and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-none text-gray-800 focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-r-lg text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex justify-center space-x-6">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-green-400 transition duration-300 transform hover:scale-110"
              >
                <Icon size={28} />
              </a>
            )
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12"></div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-200 text-sm md:text-base">
          © 1998 21st Century GIS Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
