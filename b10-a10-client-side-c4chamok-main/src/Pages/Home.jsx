import React, { useContext } from 'react';
import Banner from '../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import MovieCard from '../Components/MovieCard/MovieCard';
import Upcoming from '../Components/Upcoming/Upcoming';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Comments from '../Components/Comments/Comments';
import TrendingGenres from '../Components/TrendingGenres/TrendingGenres';


const Home = () => {
    const { isDark, selectedGenres, setSelectedGenres } = useContext(AuthContext)
    const movies = useLoaderData()
    document.title = "FavFlix | Home"
    return (
        <div className=''>
            <Banner></Banner>
            <TrendingGenres setSelectedGenres={setSelectedGenres} isDark={isDark} />
            <div className='flex flex-col items-center mt-12'>
                <h2 className={`text-3xl font-bold ${isDark ? ` text-white`: "text-gray-900"}`}>Featured Movies</h2>
                <div className='w-11/12 overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 p-3'>
                    {
                        movies.map(movie => <MovieCard movie={movie}></MovieCard>)
                    }
                </div>
                <Link to={'/allmovies'} className='btn px-6 mt-5 bg-indigo-500 text-white hover:bg-indigo-600  border-none rounded-[50px]'>Show All</Link>
            </div>
            <div >
                <Upcoming isDark={isDark}></Upcoming>
                <Comments></Comments>
            </div>
        </div>
    );
};

export default Home;