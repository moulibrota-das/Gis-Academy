import React from "react";

const ContactUs = () => {
  return (
    <section
      className="min-h-[800px] container mx-auto bg-offWhite flex items-center justify-center px-6 mb-6"
      id="contact"
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section - Contact Info */}
        <div className="flex-1">
          <iframe
            className="h-full w-full rounded-md border-2 shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.965650243995!2d88.37930227528942!3d22.464784137294057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271156a4d7b17%3A0x2d4f6c93d70c3c4d!2s404%2C%20Baghajatin%20Pl%2C%20Kolkata%2C%20West%20Bengal%20700086!5e0!3m2!1sen!2sin!4v1711590604572!5m2!1sen!2sin"
            allowFullScreen="true"
            title="Google Map - 404, Baghajatin Place, Kolkata"
          ></iframe>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1">
          <div className=" rounded-xl pt-6 md:p-10">
            <h2 className="text-3xl font-semibold text-darkGreen mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-4">You can reach us anytime</p>

            {/* Form Inputs */}
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>

              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>
              <div className="mt-4">
                <input
                  type="education"
                  placeholder="Education qualification"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>

              <div className="mt-4">
                <div className="flex">
                  <select className="border border-gray-300 rounded-l-lg p-3 text-gray-700">
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="flex-1 border border-gray-300 rounded-r-lg p-3 text-gray-700"
                  />
                </div>
              </div>

              <div className="mt-4">
                <textarea
                  placeholder="How can we help?"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none"
                  rows="4"
                  maxLength="120"
                ></textarea>
                <p className="text-right text-sm text-gray-400">0/120</p>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-forestGreen text-white py-3 rounded-lg mt-4 hover:bg-mossGreen transition">
                Submit
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By contacting us, you agree to our{" "}
                <a href="#" className="text-forestGreen font-semibold">
                  Terms
                </a>{" "}
                of service and{" "}
                <a href="#" className="text-forestGreen font-semibold">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
