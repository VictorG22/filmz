import React, { useEffect, useState } from "react";
import { tmdbOptions } from "../utils.js/api";
import { Link } from "react-router-dom";

const MediaList = ({ category, mediaType }) => {
  const image_path = "https://image.tmdb.org/t/p/original";


  const [media, setMedia] = useState([]);
  


  const fetchMedia = async () => {
    if (mediaType === 'show') {
      const url = `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`;
      const options = tmdbOptions;
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setMedia(json.results))
        .catch((err) => console.error(err));
      }
      
      
      if (mediaType === 'movie') {
        const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
        const options = tmdbOptions;
        fetch(url, options)
          .then((res) => res.json())
          .then((json) => setMedia(json.results))
          .catch((err) => console.error(err));
        
    }
  };


  useEffect(() => {
    fetchMedia();
  }, [category]);

  return (
    <>
      <div className="max-w-[1200px] mx-auto py-6 px-2">
        <h2 className="text-[#e0e0e0] mb-6 text-2xl font-bold">{category.replace(/_/g, " ").toUpperCase()}</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar1 py-6">
          {media.map((item) => (
            <Link
              to={!item.first_air_date ? `/movie-details/${item.id}` : `/show-details/${item.id}`}
              key={item.id}
              className="shrink-0 hover:scale-109 w-[250px] border-2 border-black hover:border-[#e50914] active:scale-98 rounded-sm transition duration-200"
            >
              <img
                className="w-full mb-2 rounded-sm"
                src={image_path + item.backdrop_path}
                alt=""
              />
              <h3 className=" w-full text-[#e0e0e0] truncate font-bold p-2 bg-linear-to-b  from-transparent via-[#0b0b0b]  to-transparent">
                {item.name || item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MediaList;
