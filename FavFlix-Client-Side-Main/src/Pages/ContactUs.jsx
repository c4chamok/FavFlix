import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  const { isDark } = useContext(AuthContext);
  document.title = "FavFlix | Contact Us"
  return (
    <section className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? ` text-white`: "text-gray-900"}`}>Contact Us</h2>
        <p className={`mb-12 text-center ${isDark ? ` text-gray-400`: "text-gray-900"}`}>
          Have questions or feedback? We’d love to hear from you! Reach out to us using the form below.
        </p>
        <div className="w-full flex items-center justify-between lg:flex-row gap-8">
          {/* Contact Form */}
          <form className="w-[48%] space-y-6">
            <div>
              <label htmlFor="name" className={`text-sm font-medium ${isDark ? ` text-gray-400`: "text-gray-900"}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={`text-sm font-medium ${isDark ? ` text-gray-400`: "text-gray-900"}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={`text-sm font-medium ${isDark ? ` text-gray-400`: "text-gray-900"}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="w-[48%] space-y-8">
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? ` text-gray-400`: "text-gray-900"}`}>Email Us</h3>
              <p className={`text-sm font-medium ${isDark ? ` text-gray-400`: "text-gray-900"}`}>support@movieportal.com</p>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? ` text-gray-400`: "text-gray-900"}`}>Call Us</h3>
              <p className={`text-sm font-medium ${isDark ? ` text-gray-400`: "text-gray-900"}`}>+1 123 456 7890</p>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? ` text-gray-400`: "text-gray-900"}`}>Visit Us</h3>
              <p className={`text-sm font-medium ${isDark ? ` text-gray-400`: "text-gray-900"}`}>
                123 Movie Street, Film City, Hollywood, USA
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? ` text-gray-400`: "text-gray-900"}`}>Follow Us</h3>
              <div className={`flex space-x-4 text-2xl ${isDark ? ` text-gray-400`: "text-gray-900"}`}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FaFacebook/>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
