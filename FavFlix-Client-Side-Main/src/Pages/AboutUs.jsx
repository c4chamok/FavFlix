import React from "react";

const AboutUs = () => {
  document.title = "FavFlix | About Us"
  return (
    <div className=" p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to FavFlix
          your ultimate movie exploration platform. Our mission is to make movie discovery effortless, enjoyable, 
          and personalized. Whether you're a casual movie watcher or a series lover, FavFlix is designed to be your 
          trusted companion in finding, managing, and sharing your favorite films.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            At FavFlix, we aim to create a community of movie lovers who can share their passion for cinema.
            We believe that every movie tells a story, and our platform is here to help you discover the stories that 
            resonate with you the most. Join us as we redefine the way you interact with movies.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700">
            Got questions, suggestions, or just want to say hi? Reach out to us at{" "}
            <a href="mailto:support@favflix.com" className="text-indigo-600 underline">
              support@favflix.com
            </a>
            . We'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
