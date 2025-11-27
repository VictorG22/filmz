import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbOptions } from "../utils.js/api";
import { Star, Vote } from "lucide-react";
import { timeConverter } from "../utils.js/timeConverter";
import { kConverter } from "../utils.js/kConverter";

const MovieDetails = () => {
  const { id } = useParams();

  const [media, setMedia] = useState({});
  const [cast, setCast] = useState([]);

  const fetchMediaDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      tmdbOptions
    );
    const mediaData = await data.json();

    setMedia(mediaData);
  };

  const fetchMediaCast = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      tmdbOptions
    );
    const castData = await data.json();

    setCast(castData.cast);
  };

  useEffect(() => {
    fetchMediaDetails();
    fetchMediaCast();
  }, [id]);


  return (
    <>
      <div
        className="relative flex justify-center items-center overflow-x-hidden h-[calc(75vh-100px)]  bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`,
        }}
      >
        <div className="absolute z-10 inset-0 bg-linear-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b]" />
        <div className="z-40 h-full flex max-w-[1600px] py-6 px-4">
          <div className=" flex items-end gap-2 text-[#e0e0e0]">
            <img
              className="w-[250px] border-2 border-black  rounded-md shadow-lg shadow-gray"
              src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
            />

            <div className="mx-auto scrollbar1 max-w-[800px] flex flex-col bg-[rgba(0,0,0,0.3)] gap-y-4 p-4 rounded-lg">
              <h1 className="text-6xl font-bold break">
                {media.title || media.name}
              </h1>
              <h2 className="text-xl font-semibold">
                {media.tagline ? media.tagline : "No tagline"}
              </h2>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  <Star className="text-[#FFD700]" />
                  <p>{media.vote_average?.toFixed(2)} </p>
                </div>
                <div className="flex gap-1">
                  <Vote className="" />
                  <p>{media.vote_count && kConverter(media?.vote_count)}</p>
                </div>
                <p>
                    {timeConverter(media.runtime)}
                </p>
              </div>
              <p className="text-lg">{media.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1200px] mx-auto py-10 px-5 text-[#e0e0e0] ">
        <div className=" p-2 rounded-md shadow-2xl bg-linear-to-b from-[#1a0a0f] via-[#330d14] to-[#4d0f19]">
          <div className="flex flex-col bg-black/70 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold">Cast: </h2>
            <div className="scrollbar1 flex overflow-x-auto pt-6">
              {cast?.map((act) => (
                <div key={act.name} className="flex mb-2 last:after:content-none after:my-auto after:w-0.5 after:bg-yellow-600 after:h-[60%] after:mx-4">
                  <div
                    key={act.name}
                    className="w-[100px] flex flex-col items-center"
                  >
                    {act.profile_path ? <figure className="w-[100px] aspect-square rounded-full overflow-hidden">
                      <img
                        src={`https://image.tmdb.org/t/p/original${act.profile_path}`}
                        className=""
                        alt={act.name}
                        />
                         </figure> : <div className="flex items-center text-center bg-black w-[100px] aspect-square rounded-full overflow-hidden">
                            <span>No Image Available</span>
                         </div>
                        }
                    <p className="wrap-break-words text-center">{act.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6 flex flex-col bg-black/70 p-6 rounded-xl shadow-lg mt-2">
            <h2 className="text-xl font-bold">Details:</h2>

          <div className="pt-4 grid grid-cols-[auto_1fr] gap-4">

            <span>Budget:</span>
            <span>{media.budget ? `$${media.budget.toLocaleString()}` : "N/A"}</span>

            <span>Revenue:</span>
            <span>{media.revenue ? `$${media.revenue.toLocaleString()}` : "N/A"}</span>

            <span>Genres:</span>
            <span>{media.genres ? `${media.genres.map(name => name.name).join(", ")}` : "N/A"}</span>

            <span>Original Language:</span>
            <span className="uppercase">{media.original_language ? `${media.original_language}` : "N/A"}</span>
            
            <span>Original Title:</span>
            <span>{media.original_title ? `${media.original_title}` : "N/A"}</span>
            
            <span>Status:</span>
            <span >{media.status ? `${media.status}` : "N/A"}</span>
            
            <span>Release Date:</span>
            <span >{media.release_date ? `${new Date(media.release_date)?.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"})}` : "N/A"}</span>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
