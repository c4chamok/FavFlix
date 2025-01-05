import React, { useState } from "react";

const Upcoming = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");


  const movies = [
    {
      id: 1,
      title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
      thumbnail: "https://img.youtube.com/vi/NOhDyUmT9z0/hqdefault.jpg",
      trailer: "https://www.youtube.com/embed/NOhDyUmT9z0",
    },
    {
      id: 2,
      title: "Squid Game: Season 2 | Official Trailer | Netflix",
      thumbnail: "https://img.youtube.com/vi/Ed1sGgHUo88/hqdefault.jpg",
      trailer: "https://www.youtube.com/embed/Ed1sGgHUo88",
    },
    {
      id: 3,
      title: "Movie 3",
      thumbnail: "https://img.youtube.com/vi/5lzoxHSn0C0/hqdefault.jpg",
      trailer: "https://www.youtube.com/embed/5lzoxHSn0C0",
    },
  ];

  const openModal = (url) => {
    setTrailerUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTrailerUrl("");
  };

  return (
    <div className="bg-gray-900 flex flex-col mt-20 mb-10 items-center text-white py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
              <button
                onClick={() => openModal(movie.trailer)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <iframe
              width="560"
              height="315"
              src={trailerUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upcoming;
