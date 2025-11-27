import React, { useEffect, useState } from "react";
import { tmdbOptions } from "../utils.js/api";
import { Star, Vote } from "lucide-react";
import { kConverter } from "../utils.js/kConverter";
import { Link } from "react-router-dom";

const RandomMedia = () => {
  const [randomMedia, setRandomMedia] = useState([]);
  //   const [randomMovies, setRandomMovies] = useState([]);
  //   const [randomShows, setRandomShows] = useState([]);

  //   let randomClickBtn = false;
  const [hoveredId, setHoveredId] = useState(1);

  const fetchRandomMedia = async () => {
    try {
      const randomId = Math.floor(Math.random() * 500) + 1;

      // Fetch movies
      const moviesRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomId}&sort_by=popularity.desc`,
        tmdbOptions
      );
      const moviesData = await moviesRes.json();
      const randomMovies = moviesData.results
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      // Fetch shows
      const showsRes = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${randomId}&sort_by=popularity.desc`,
        tmdbOptions
      );
      const showsData = await showsRes.json();
      const randomShows = showsData.results
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      const combined = [...randomMovies, ...randomShows];
      const shuffled = combined.sort(() => Math.random() - 0.5);

      // Update state
      setRandomMedia(shuffled);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomMedia();
  }, []);


  return (
    <section
      id="random"
      className="overflow-x-hidden relative px-6 text-[#e0e0e0] mx-auto bg-linear-to-b from-black via-gray-900 to-black"
    >
        <div className="mx-auto max-w-[1200px]">

      <div className="flex flex-col items-center p-10">
        <h2 className="text-4xl text-[#e0e0e0] font-semibold text-center mb-10">
          Here are some random titles for you to discover!
        </h2>
        <div className="my-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-auto gap-4 ">
          {randomMedia.map((media) => {
              const isHovered = hoveredId !== null; // true if any card is hovered
              const isThisHovered = hoveredId === media.id;
              return (
              <Link
              to={!media.first_air_date ? `/movie-details/${media.id}` : `/show-details/${media.id}`}
              key={media.id}
              onMouseEnter={() => setHoveredId(media.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-2 flex flex-col items-center justify-between w-full sm:w-[220px] rounded-md overflow-hidden bg-linear-to-tr from-gray-950 via-gray-800 to-gray-950 shadow-lg hover:scale-102 transition duration-300 
                ${
                    !isHovered
                    ? "opacity-100 scale-100" // no card hovered yet → full opacity
                    : isThisHovered
                    ? "opacity-100 scale-105" // hovered card → highlighted
                    : "opacity-50 scale-100" // other cards → dimmed
                }`}
                >
                {media.poster_path ?
                 <img
                 src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                 alt=""
                 className="w-full"
                 />
                 :
                 <div className="w-[200px] h-[300px] flex justify-center items-center text-lg">No Image Available</div>
                }
                <div className="w-full flex flex-col justify-between">

                <h3 className="text-md py-2 font-bold truncate">
                  {media.title || media.name}
                </h3>
                <div className="flex items-center gap-2">
                    <Star className="text-[#FFD700]"/>
                <p> {media.vote_average.toFixed(1)}</p>
                <Vote />
                <p> {kConverter(media.vote_count)}</p>
                </div>
                </div>
              </Link>
            );
        })}
        </div>
      </div>
        </div>
    </section>
  );
};

export default RandomMedia;
