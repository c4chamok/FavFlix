import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const TermsAndConditions = () => {
    const { isDark } = useContext(AuthContext);
      document.title = "FavFlix | Terms & Conditions"
  return (
    <section
      className={`min-h-screen px-6 py-12 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-4xl font-bold mb-6 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Terms & Conditions
        </h1>
        <p className={`mb-6 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Please read these terms and conditions carefully before using our
          movie portal. By accessing or using the service, you agree to be bound by
          these terms.
        </p>
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              1. Acceptance of Terms
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              By using our services, you accept and agree to comply with these
              terms. If you disagree with any part of the terms, you may not access
              the service.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              2. User Conduct
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Users agree to use the service responsibly and not engage in any
              prohibited activities such as:
            </p>
            <ul className="ml-6 mt-4 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
                Illegal distribution of content
              </li>
              <li className="flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
                Breaching intellectual property rights
              </li>
              <li className="flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
                Sharing harmful or malicious content
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              3. Intellectual Property
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              All content, including text, images, and logos, are owned by the
              movie portal unless otherwise stated. Unauthorized use or duplication
              of this material without permission is prohibited.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              4. Termination
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              We reserve the right to terminate or suspend your access immediately,
              without prior notice, for any reason, including if you breach these
              terms.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              5. Limitation of Liability
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              In no event shall the movie portal or its affiliates be liable for
              any indirect, incidental, or consequential damages arising out of your
              use of the service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
