import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-deepGreen text-white py-8">
      <div className="container mx-auto px-6 ">
        {/* Contact Details */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-sm md:text-base">
            404, Baghajatin Rd, Vidyasagar Colony, Ganguly Bagan, Kolkata, West
            Bengal 700086
          </p>
          <p className="text-gray-300 text-sm md:text-base mt-2">
            <a
              href="mailto:pchakraborty_99@yahoo.com"
              className="text-green-400 hover:text-green-300"
            >
             pchakraborty_99@yahoo.com
            </a>
          </p>
          <p className="text-gray-300 text-sm md:text-base mt-2">
            <a
              href="tel:+911234567890"
              className="text-green-400 hover:text-green-300"
            >
              ‭+91 9830379812‬, ‭+91 8617230347‬
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {[{"icon": FaTwitter, "url": "#"}, {"icon": FaInstagram, "url":"#"}, {"icon":FaFacebook,"url": "facebook.com/21stcenturygisacademy/"}, {"icon":FaLinkedin, "url": "linkedIn.com/in/pankajchakraborty/"}].map(
            (item, index) => (
              <a

                target="_blank" rel="noopener noreferrer"
              href={item.url.startsWith('http') ? item.url : `https://${item.url}`}

                key={index}
                className="text-white text-xl hover:text-gray-400 transition-colors"
              >
                <item.icon />
              </a>
            )
          )}
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          {/* Copyright */}
          <p>Copyright © 1998<span className="italic"> 21ST CENTURY GIS ACADEMY. All Rights Reserved </span></p>

          {/* Policy Links */}
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
