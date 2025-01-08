import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import ReactStars from "react-stars";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FiEdit } from "react-icons/fi";

const MovieDetails = () => {
    const movie = useLoaderData()[0]
    const { user } = useContext(AuthContext);
    const [favMovieIDs, setFavMovieIDs] = useState([]);
    const navigate = useNavigate()
    document.title = `FavFlix | ${movie.title}`
    const isIncludes = favMovieIDs?.includes(movie._id)

    useEffect(() => {
        fetch("https://favflix-server.vercel.app/favorite-movies/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => { setFavMovieIDs(data.movieIDS) })
    }, [])

    const handleAddtoFavourite = () => {
        fetch("https://favflix-server.vercel.app/favorite-movies/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user?.email, movieID: movie._id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setFavMovieIDs([movie._id])
                    Swal.fire({
                        icon: "success",
                        title: "Added To Favorite Movies",
                        showConfirmButton: false,
                        timer: 1200
                    });
                }
            })
    }

    const handleDelete = () => {
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
                fetch(`https://favflix-server.vercel.app/movies/${movie._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        data.acknowledged &&
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        navigate("/allmovies")
                    })

            }
        });

    }


    return (
        <div className="w-9/12 mx-auto my-10 p-6 bg-gradient-to-br from-[#ff9671] via-[#ffc75f] to-[#00d4ff] rounded-lg shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="rounded-lg shadow-md w-full lg:w-[300px]"
                    />
                </div>
                <div className="flex flex-col gap-4 text-gray-900">
                    <h1 className="text-3xl font-bold text-gray-900">{movie.title}</h1>
                    <div className="flex gap-4 items-center text-sm">
                        <p>
                            <strong>Genre:</strong>{" "}
                            <span className="text-gray-800">{movie.genre.join(", ")}</span>
                        </p>
                        <p>
                            <strong>Year:</strong>{" "}
                            <span className="text-gray-800">{movie.year}</span>
                        </p>
                        <p>
                            <strong>Duration:</strong>{" "}
                            <span className="text-gray-800">{movie.duration} mins</span>
                        </p>
                    </div>
                    <p className="text-gray-800">{movie.summary}</p>
                    <ReactStars
                        value={movie.rating}
                        size={30}
                        edit={false}
                    ></ReactStars>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button onClick={handleDelete} className="btn btn-error flex items-center gap-2">
                            <AiOutlineDelete className={` text-xl`} /> Delete Movie
                        </button>
                        <button onClick={handleAddtoFavourite} className="btn btn-secondary flex items-center gap-2">
                            {
                                isIncludes ? <AiFillHeart className={` text-xl`} /> : <AiOutlineHeart className={` text-xl`} />
                            }
                            Add to Favorite
                        </button>
                        <Link to={`/updatemovie/${movie._id}`} className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <FiEdit className="mr-2 text-xl" /> 
                        Update Movie
                    </Link>
                </div>
            </div>
        </div>
        </div >
    );
};

export default MovieDetails;
