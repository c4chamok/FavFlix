import React, { useContext } from 'react';
import Banner from '../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import MovieCard from '../Components/MovieCard/MovieCard';
import Upcoming from '../Components/Upcoming/Upcoming';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Comments from '../Components/Comments/Comments';


const Home = () => {
    const { isDark } = useContext(AuthContext)
    const movies = useLoaderData()
    document.title = "FavFlix | Home"
    return (
        <div className='mt-7'>
            <Banner></Banner>
            <div className='flex flex-col items-center mt-12'>
                <h2 className={`text-4xl ${isDark ? ` text-white`: ""}`}>Featured Movies</h2>
                <div className='w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 p-3'>
                    {
                        movies.map(movie => <MovieCard movie={movie}></MovieCard>)
                    }
                </div>
                <Link to={'/allmovies'} className='btn px-6 mt-5 bg-indigo-500 text-white hover:bg-indigo-600 rounded-[50px]'>Show All</Link>
            </div>
            <div >
                <Upcoming></Upcoming>
                <Comments></Comments>
            </div>
        </div>
    );
};

export default Home;