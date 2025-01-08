import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactStars from 'react-stars'
import { useForm } from "react-hook-form";
import Select from 'react-select';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddMovies = () => {
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(null);
    const [posterUrl, setPosterUrl] = useState("");
    document.title = "FavFlix | Add Movie"
    const handlePosterChange = (e) => {
        setPosterUrl(e.target.value);
    };


    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    const handleSelectGenre = (Selected) => {
        const selectedValues = Selected.map(option => option.value);
        setSelectedGenre(selectedValues);
    };

    const handleSelectYear = (Selected) => {
        setSelectedYear(Selected.value);
    }

    const handleRating = (newRating) => {
        setRating(newRating);
    }

    const onSubmit = (data) => {
        fetch("https://favflix-server.vercel.app/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire("Movie has been Added");
                    reset();
                    setRating(null);
                    setPosterUrl("")
                }
            })
    };

    const genreOptions = [
        { value: "comedy", label: "Comedy" },
        { value: "drama", label: "Drama" },
        { value: "horror", label: "Horror" },
        { value: "action", label: "Action" },
        { value: "sci-fi", label: "Sci-Fi" },
        { value: "romance", label: "Romance" },
    ];

    const yearOptions = [
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" }
    ]

    useEffect(() => {
        setValue("genre", selectedGenre);
        setValue("year", selectedYear);
        setValue("rating", rating);
        setValue("updatedby", user.email)
    }, [selectedGenre, selectedYear, rating])


    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center my-16 w-5/12 bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Add Movie</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
                    <div className="w-full flex justify-center mb-4">
                        {posterUrl ? (
                            <img
                                src={posterUrl}
                                alt="Poster Preview"
                                className="w-40 h-60 object-cover rounded-md shadow-md"
                            />
                        ) : (
                            <div className="w-40 h-60 flex items-center justify-center bg-gray-200 rounded-md shadow-md">
                                <p className="text-gray-500">Poster Preview</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700">Movie Poster URL:</label>

                        <input
                            className="input input-bordered w-full"
                            placeholder='Movie Poster URL'
                            type="text"
                            {...register("poster", {
                                required: "Poster URL is required.",
                                pattern: {
                                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/,
                                    message: "Invalid image URL.",
                                },
                            })}
                            onChange={handlePosterChange}
                        />
                        {errors.poster && <p className='text-red-500'>{errors.poster.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Movie Title:</label>
                        <input
                            className="input input-bordered w-full"
                            placeholder="Movie Title"
                            {...register("title", {
                                required: "Movie title is required.",
                                minLength: {
                                    value: 2,
                                    message: "Title must have at least 2 characters.",
                                },
                            })}
                        />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Genre:</label>
                        <Select
                            {...register("genre", { required: "Please select at least one genre." })}
                            isMulti
                            options={genreOptions}
                            onChange={handleSelectGenre}
                            placeholder="Select genres..."
                        />
                        {errors.genre && <p className="text-red-500">{errors.genre.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Duration (minutes):</label>
                        <input
                            className="input input-bordered w-full"
                            placeholder="Duration"
                            type="number"
                            {...register("duration", {
                                required: "Duration is required.",
                                min: {
                                    value: 60,
                                    message: "Duration must be at least 60 minutes.",
                                },
                            })}
                        />
                        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Release Year:</label>
                        <Select
                            {...register("year", { required: "Please select a Year." })}
                            onChange={handleSelectYear}
                            options={yearOptions}
                        />
                        {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Movie Summary:</label>
                        <textarea
                            className="input input-bordered mt-2 py-3 w-full h-[100px]"
                            placeholder="Movie Summary....."
                            {...register("summary", {
                                required: "Please add a brief Movie Summary",
                                minLength: {
                                    value: 10,
                                    message: "Movie Summary must have at least 10 characters.",
                                },
                            })}
                        />
                        {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}
                    </div>
                    <div className='inline-flex gap-4 items-center'>
                        <label className="block text-gray-700">Rating:</label>
                        <ReactStars
                            {...register("rating", { required: "Please give a Rating." })}
                            count={5}
                            value={rating}
                            onChange={handleRating}
                            size={40}
                            color2={'#ffd700'} />
                        {errors.rating && <p className='text-red-500'>{errors.rating.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMovies;