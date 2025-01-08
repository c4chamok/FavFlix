import { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Footer = () => {
  const navigate = useNavigate();
  const { selectedGenres, setSelectedGenres } = useContext(AuthContext)
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 pt-20 pb-5">
      <div className="w-[90%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-3xl font-bold mb-4 bg-gradient-text">FavFlix</h2>
          <p className="text-sm">
            Discover your favorite movies and manage your watchlist seamlessly with FavFlix. Enjoy an effortless user experience and curated movie collections.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="text-gray-300 hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.x.com" target="_blank" aria-label="Twitter" className="text-gray-300 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-gray-300 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.youtube.com" target="_blank" aria-label="YouTube" className="text-gray-300 hover:text-red-500">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link to={"/termsandcondition"} className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/contactus" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Popular Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={e=>{setSelectedGenres("action"); navigate("allmovies") }}  className="hover:text-white">Action</button></li>
            <li><button onClick={e=>{setSelectedGenres("comedy"); navigate("allmovies") }} className="hover:text-white">Comedy</button></li>
            <li><button onClick={e=>{setSelectedGenres("drama"); navigate("allmovies") }} className="hover:text-white">Drama</button></li>
            <li><button onClick={e=>{setSelectedGenres("thriller"); navigate("allmovies") }} className="hover:text-white">Thriller</button></li>
            <li><button onClick={e=>{setSelectedGenres("sci-fi"); navigate("allmovies") }} className="hover:text-white">Sci-Fi</button></li>
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
