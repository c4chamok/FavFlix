import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 pt-20 pb-5">
      <div className="w-[90%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-3xl font-bold mb-4 bg-gradient-text">FavFlix</h2>
          <p className="text-sm">
            Discover your favorite movies and manage your watchlist seamlessly with FavFlix. Enjoy an effortless user experience and curated movie collections.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-red-500">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Popular Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Action</a></li>
            <li><a href="#" className="hover:text-white">Comedy</a></li>
            <li><a href="#" className="hover:text-white">Drama</a></li>
            <li><a href="#" className="hover:text-white">Thriller</a></li>
            <li><a href="#" className="hover:text-white">Sci-Fi</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and movie recommendations.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow w-full px-4 py-2 rounded-l bg-gray-800 text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-r hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>&copy; 2024 FavFlix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
