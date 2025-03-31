import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm('service_v5a6kk7', 'template_jkfjol9', form.current, {
        publicKey: '4wtzO7BsGSc3IxuRF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.015796045216!2d88.3846975!3d22.4816167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzUzLjgyIiBOIDg4wrAyMycwNC45MSIgRQ!5e0!3m2!1sen!2sin!4v1711590604572!5m2!1sen!2sin"
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

              <div className="mt-4">
                <div className="flex">
                  <select className="border border-gray-300 rounded-l-lg p-3 text-gray-700">
                    <option value="+91">+91</option>
                  </select>
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Phone number"
                    className="flex-1 border border-gray-300 rounded-r-lg p-3 text-gray-700"
                  />
                </div>
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
