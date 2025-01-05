import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MovieCard from '../Components/MovieCard/MovieCard';

const AllMoviesPage = () => {
    const [serachText, setSearchText] = useState(""); 
    const [movies, setMovies] = useState([]); 
    const loaderMovies = useLoaderData();
    document.title = "FavFlix | All Movies"
    useEffect(()=>{
        if(serachText){
            fetch(`https://favflix-server.vercel.app/moviesearch/${serachText}`)
            .then(res=>res.json())
            .then(data=>{
                setMovies(data);
            })
        }else{
            setMovies(loaderMovies);
        }
    },[serachText])


    return (
        <div className='flex flex-col items-center mt-12'>
            <h2 className='text-5xl'>All Movies</h2>
            <label className="input input-bordered mt-5 flex items-center gap-2">
                <input type="text" onChange={()=>setSearchText(event.target.value)} className="grow" placeholder="Search" />
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
            <div className='w-8/12 grid grid-cols-3 gap-4 mt-7 p-3'>
                {
                    movies.map(movie => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMoviesPage;