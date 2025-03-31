import React, { useEffect } from "react";
import { useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const input = document.querySelector("#mobile_code");
    const iti = intlTelInput(input, {
      initialCountry: "in",
      separateDialCode: true,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      customContainer: "w-full",
      customPlaceholder: function (
        selectedCountryPlaceholder,
        selectedCountryData
      ) {
        return "Phone Number";
      },
      containerClass: "w-full",
      inputClass: "w-full",
    });

    // Add custom styles to ensure proper width
    const style = document.createElement("style");
    style.textContent = `
      .iti {
        width: 100%;
      }
      .iti__flag-container {
        z-index: 10;
      }
      .iti__selected-flag {
        padding: 0 6px 0 8px;
      }
    `;
    document.head.appendChild(style);

    // Clean up on unmount
    return () => {
      if (iti) {
        iti.destroy();
      }
      document.head.removeChild(style);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form.current);

    emailjs
      .sendForm("service_v5a6kk7", "template_jkfjol9", form.current, {
        publicKey: "4wtzO7BsGSc3IxuRF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
          form.current.reset(); // Reset form after submission
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .then(() => {
        setLoading(false);
      });
  };

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.384502173889!2d88.3821356!3d22.4816037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02711178868881%3A0xa740b3d30785a2bb!2s21st%20Century%20GIS%20Academy!5e0!3m2!1sen!2sin!4v1711796499327!5m2!1sen!2sin"
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

            {/* Success Popup */}
            {showPopup && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-2/3 md:w-auto bg-mossGreen text-white px-6 py-3 rounded-lg shadow-lg ">
                ✅ Message sent successfully!
              </div>
            )}

            {/* Form Inputs */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                />
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>

              <div className="mt-4">
                <input
                  name="email_from"
                  id="email_from"
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>
              <div className="mt-4">
                <input
                  name="education"
                  id="education"
                  type="education"
                  placeholder="Education qualification"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>

              <div className="mt-4">
                <input
                  name="course"
                  id="course"
                  type="course"
                  placeholder="Courses Interested"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                />
              </div>

              <div className="mt-4 relative w-full">
                <input
                  type="tel"
                  id="mobile_code"
                  className="w-full border p-3 border-gray-300 rounded-lg text-gray-700 pl-[90px]"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can we help?"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none"
                  rows="4"
                  maxLength="120"
                ></textarea>
                <p className="text-right text-sm text-gray-400">0/120</p>
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-forestGreen text-white py-3 rounded-lg mt-4 hover:bg-mossGreen transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={loading}
              >
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
