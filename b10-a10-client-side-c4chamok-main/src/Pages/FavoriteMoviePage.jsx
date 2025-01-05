import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router";
import ReactStars from "react-stars";
import { AuthContext } from "../AuthProvider/AuthProvider";
import FavMovieCard from "../Components/FavMovieCard/FavMovieCard";
import Swal from "sweetalert2";

const FavoriteMoviePage = () => {
    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState([])
    document.title = "FavFlix | Favourite Movies"
    useEffect(() => {
        const fetchMovies = async () => {
            if (!user?.email) return;

            try {
                const favoriteResponse = await fetch("https://favflix-server.vercel.app/favorite-movies/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: user.email }),
                });
                const favoriteData = await favoriteResponse.json();

                const multiMoviesResponse = await fetch("https://favflix-server.vercel.app/multi-movies/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ids: favoriteData.movieIDS }),
                });
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
        <div className="flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-center mb-10">Favorite Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12">
                {movies.map((movie) => (
                    <FavMovieCard key={movie._id} movie={movie} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default FavoriteMoviePage;