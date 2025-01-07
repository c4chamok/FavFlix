import { Link, useRouteError } from "react-router";
import Lottie from "lottie-react";
import animationData from "../assets/Errorlottie.json"; 

const ErrorPage = () => {
  document.title = "404!! Not Found";
  const error = useRouteError();

  return (
    <div id="error-page" className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      {/* Left: Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-80 md:w-96">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* Right: Error Message */}
      <div className="w-full md:w-1/2 px-8 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-500">Oops!</h1>
        <p className="text-lg md:text-xl mb-4">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-base md:text-lg italic mb-6">
          {error ? error.statusText || error.message : "Unknown error"}
        </p>
        <Link to="/" className="btn bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-3 rounded-lg shadow-lg transition-all">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
