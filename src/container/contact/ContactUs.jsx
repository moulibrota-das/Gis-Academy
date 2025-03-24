import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full bg-offWhite flex items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-10">
        {/* Left Section - Contact Info */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-darkGreen mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Email, call, or complete the form to learn how Snappy can solve your
            messaging problem.
          </p>

          <p className="text-gray-700 mb-1">info@snappy.io</p>
          <p className="text-gray-700 mb-4">321-221-231</p>

          <a href="#" className="text-forestGreen font-semibold underline">
            Customer Support
          </a>

          {/* Additional Contact Options */}
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-semibold text-darkGreen">Customer Support</h3>
              <p className="text-gray-600">
                Our support team is available 24/7 to address your concerns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-darkGreen">
                Feedback and Suggestions
              </h3>
              <p className="text-gray-600">
                We value your feedback and are committed to improving Snappy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-darkGreen">Media Inquiries</h3>
              <p className="text-gray-600">
                For press inquiries, contact us at media@snappyapp.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
            <h2 className="text-3xl font-semibold text-darkGreen mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-8">You can reach us anytime</p>

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
                <div className="flex">
                  <select className="border border-gray-300 rounded-l-lg p-3 text-gray-700">
                    <option value="+62">+62</option>
                    <option value="+1">+1</option>
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
              <button className="w-full bg-forestGreen text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition">
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
    </div>
  );
};

export default ContactUs;
