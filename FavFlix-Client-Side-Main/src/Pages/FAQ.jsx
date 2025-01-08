import React, { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const FAQ = () => {
    const { isDark } = useContext(AuthContext);
          document.title = "FavFlix | FAQ"
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button on the homepage and fill in the required details. Once registered, you can start exploring movies and features.",
    },
    {
      question: "Can I watch movies on this portal?",
      answer:
        "No, this portal is designed for browsing, reviewing, and managing your favorite movies. Streaming is not supported.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Go to the login page and click on 'Forgot Password'. Follow the instructions to reset your password via email.",
    },
    {
      question: "Is there a subscription fee?",
      answer:
        "No, our portal is completely free to use. You can explore and manage movies without any cost.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Visit the 'Contact Us' page and fill out the form. Our team will respond to your query as soon as possible.",
    },
  ];

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
          Frequently Asked Questions
        </h1>
        <p className={`mb-6 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Below are answers to some of the most commonly asked questions about our
          movie portal. If you can't find the answer to your question, feel free to
          contact us.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className={`p-4 rounded-lg ${
                isDark ? "bg-gray-800" : "bg-white shadow-md"
              }`}
            >
              <summary
                className={`flex justify-between items-center cursor-pointer text-lg font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {faq.question}
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </summary>
              <p className={`mt-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
