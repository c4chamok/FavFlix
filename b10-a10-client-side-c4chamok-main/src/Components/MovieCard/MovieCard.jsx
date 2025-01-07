import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import ReactStars from 'react-stars';

const MovieCard = ({ movie }) => {
    return (
        <div className="relative hover:scale-105 hover:z-30 h-96 bg-gray-900 shadow-lg overflow-hidden rounded-lg group">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full bg-black/70 p-4 transition-all duration-200">
                <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1">
                        <ReactStars value={movie.rating} size={20} />
                    </div>
                </div>
                <h2 className="text-lg transition-all duration-200 text-white font-bold truncate hover:whitespace-normal hover:overflow-visible hover:text-clip">
                    {movie.title}
                </h2>
                <p className="text-sm mt-2 text-gray-400">
                    {movie.genre.map((genre) => (
                        <span
                            key={genre}
                            className="bg-[#75787cf3] text-[#d1d5db] p-[1px] mr-1 rounded-sm"
                        >
                            {genre}
                        </span>
                    ))}
                    · {movie.duration} min
                </p>
            </div>
            <Link to={`/movies/${movie._id}`} className="absolute inset-0 flex items-center justify-center bg-black/70 text-white font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                See Details
            </Link>
        </div>
    );
};

export default MovieCard;