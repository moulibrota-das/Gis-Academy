import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-forestGreen text-off-white py-12 font-body">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
          {/* Google Map Embed */}
          <div>
            <h2 className="text-lg font-semibold uppercase text-beige font-heading mb-4">
              Our Location
            </h2>
            <iframe
              className="w-full h-56 md:h-64 rounded-md border-2 border-green shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509092!2d144.9537353153217!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f4cfcb%3A0x2c0a2a4b3123a4b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1613987579867!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold uppercase text-beige font-heading mb-4">
              Contact Us
            </h2>
            <p className="text-beige text-sm md:text-base">
              1234 Street Name, City, Country
            </p>
            <p className="text-beige text-sm md:text-base">Email: contact@example.com</p>
            <p className="text-beige text-sm md:text-base">Phone: +123 456 7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold uppercase text-beige font-heading mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-beige hover:text-green transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex justify-center space-x-6">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-beige hover:text-green transition duration-300 transform hover:scale-110"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-beige text-sm md:text-base font-heading">
          © {new Date().getFullYear()} GIS Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;