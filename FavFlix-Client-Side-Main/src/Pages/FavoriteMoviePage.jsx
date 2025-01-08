import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router";
import ReactStars from "react-stars";
import { AuthContext } from "../AuthProvider/AuthProvider";
import FavMovieCard from "../Components/FavMovieCard/FavMovieCard";
import Swal from "sweetalert2";

const FavoriteMoviePage = () => {
    const { user, isDark } = useContext(AuthContext);
    const [movies, setMovies] = useState([])
    document.title = "FavFlix | Favourite Movies"
    useEffect(() => {
        const fetchMovies = async () => {
            if (!user?.email) return;

            try {
                const multiMoviesResponse = await fetch(`https://favflix-server.vercel.app/favourite-movies/${user?.email}`);
                const multiMoviesData = await multiMoviesResponse.json();

                setMovies(multiMoviesData);
            } catch (error) {
            }
        };

        fetchMovies();
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("https://favflix-server.vercel.app/favorite-movies/", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: user?.email, movieID: id })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainings = movies.filter(movie => movie._id !== id)
                            setMovies(remainings)
                        }
                    })

            }
        });

    }

    return (
        <div className={`flex flex-col items-center py-10 ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"}`}>
            <h1 className={`text-4xl font-bold text-center mb-10 ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                Favorite Movies
            </h1>
            <div className="overflow-x-auto w-11/12">
                <table className={`table w-full`}>
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th className={`${isDark ? "text-gray-200" : "text-gray-700"} text-lg`}>Poster</th>
                            <th className={`${isDark ? "text-gray-200" : "text-gray-700"} text-lg`}>Title</th>
                            <th className={`${isDark ? "text-gray-200" : "text-gray-700"} text-lg`}>Genre</th>
                            <th className={`${isDark ? "text-gray-200" : "text-gray-700"} text-lg`}>Duration</th>
                            <th className={`${isDark ? "text-gray-200" : "text-gray-700"} text-lg`}>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id}>
                                <td>
                                    <div className="flex items-center">
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="w-16 h-20 object-cover rounded"
                                        />
                                    </div>
                                </td>
                                <td className="text-lg font-medium">{movie.title}</td>
                                <td>
                                    <div className="text-sm">
                                        {movie.genre.map((genr, index) => (
                                            <span
                                                key={index}
                                                className={`badge mr-1 ${isDark ? "badge-accent" : "badge-ghost"
                                                    }`}
                                            >
                                                {genr}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="text-lg">{movie.duration}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(movie._id)}
                                        className={`btn btn-sm ${isDark ? "btn-error" : "btn-outline btn-error"}`}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


};

export default FavoriteMoviePage;