import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router';

const FavMovieCard = ({ movie, handleDelete }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={movie.poster}
            className="w-full h-64 object-top object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600 text-sm mb-4 flex gap-2">
              <span className='font-semibold'>Genre:</span> {movie.genre.map(genr=><span className='bg-gray-400 px-[4px] text-white font-semibold rounded'>{genr}</span>)}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <strong>Year:</strong> {movie.year} |{" "}
              <strong>Duration:</strong> {movie.duration} mins
            </p>
            <p className="text-gray-700 text-sm truncate">{movie.summary}</p>
    

            <div className="flex justify-between mt-4">

              <Link to={`/movies/${movie._id}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                See Details
              </Link>

              <button
                className="  rounded-full hover:text-red-500 transition duration-300"
                onClick={() => handleDelete(movie._id)}
              >
                <AiFillCloseCircle className="size-8" />
              </button>
            </div>
          </div>
        </div>
      );
};

export default FavMovieCard;