import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MovieCard from '../Components/MovieCard/MovieCard';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AllMoviesPage = () => {
    const { selectedGenres, setSelectedGenres, isDark } = useContext(AuthContext)
    const [serachText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);
    const loaderMovies = useLoaderData();
    document.title = "FavFlix | All Movies"
    useEffect(() => {
        if (serachText || selectedGenres) {
            fetch(`https://favflix-server.vercel.app/moviesearch?serachText=${serachText}&category=${selectedGenres}`)
                .then(res => res.json())
                .then(data => {
                    setMovies(data);
                    setSelectedGenres("")
                })
        } else {
            setMovies(loaderMovies);
        }
    }, [serachText, selectedGenres])


    return (
        <div className='flex flex-col items-center mt-12'>
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-700"}`}>All Movies</h2>
            <div className='w-10/12 flex items-center justify-start mt-4'>
                <div className='flex items-center gap-2 justify-start'>
                    <span className='text-xl font-semibold'>Search Your Movies</span>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" onChange={(event) => setSearchText(event.target.value)} className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div>

                </div>
            </div>
            <div className='w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 p-3'>
                {
                    movies.map(movie => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMoviesPage;