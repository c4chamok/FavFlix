import React from "react";
import { useNavigate } from "react-router";

const TrendingGenres = ({setSelectedGenres, isDark}) => {
    const navigate = useNavigate();
  const genres = [
    { name: "Action", image: "https://assets-prd.ignimgs.com/2023/06/24/bestactionmovies-slideshow-1687567425222.jpg?crop=16%3A9&width=888" },
    { name: "Comedy", image: "https://miro.medium.com/v2/resize:fit:1200/1*m9rPuTz0Qr2Rozc6_PD8sg.jpeg" },
    { name: "Drama", image: "https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_320%2Cc_limit/MSDTITA_FE057.jpg" },
    { name: "Horror", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWaw8y0QlMn9gSOQjlmBowXa4aaDkZKQUtF32wbQ-uUfW8ejEnm9nUFeQXNylERJZwIs&usqp=CAU" },
    { name: "Romance", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vQhSg8riRAT2Qtm1uN9TYdVDxKRhNfUHeg&s" },
    { name: "Sci-Fi", image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/Sci-Fi--Fantasy-Films-2.jpg" },
  ];

  return (
    <section className="mt-8 py-12">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? ` text-white`: "text-gray-900"}`}>
          Trending Genres
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-20 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button 
              onClick={()=>{
                setSelectedGenres(genre.name.toLowerCase());
                navigate("/allmovies");
              }} 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className=" font-semibold text-2xl text-white">{genre.name}</h3>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGenres;
