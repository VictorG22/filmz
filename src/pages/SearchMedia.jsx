import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { tmdbOptions } from "../utils.js/api";
import { Search, SearchX, Star, Vote } from "lucide-react";
import { kConverter } from "../utils.js/kConverter";
import Accordion from "../ui/Accordion";
import Void from "../assets/void.svg";

const SearchMedia = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("query") || "";

  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [sorting, setSorting] = useState("Relevancy");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    navigate(`/search?query=${encodeURIComponent(inputValue.trim())}`);
  };

  const fetchResults = async () => {
    try {
      if (!query.trim()) return;

      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
        tmdbOptions
      );
      const data = await res.json();

      setResults(data.results);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const setSort = async (sortValue) => {
    if (sortValue === "RATING") {
      setSorting(sortValue);
      results.sort((a, b) => b.vote_average - a.vote_average);
    }
    if (sortValue === "RECENCY") {
      setSorting(sortValue);
      results.sort((a, b) => {
        const dateA = new Date(
          a.release_date || a.first_air_date || "1970-01-01"
        ).getTime();
        const dateB = new Date(
          b.release_date || b.first_air_date || "1970-01-01"
        ).getTime();

        return dateB - dateA; // high → low (newest first)
      });
    }
    if (sortValue === "VOTE_COUNT") {
      setSorting(sortValue);
      results.sort((a, b) => b.vote_count - a.vote_count);
    }
    if (sortValue === "POPULARITY") {
      setSorting(sortValue);
      results.sort((a, b) => b.popularity - a.popularity);
    }
  };

  function formatSortLabel(value) {
  const withSpaces = value.replace(/_/g, " ");
  console.log(value)

  return withSpaces
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

  useEffect(() => {
    fetchResults();
  }, [query]);


  return (
    <div className="p-20 text-white relative bg-linear-to-tr from-[#0a1a3a] via-[#4b0d2a] to-[#0a1a3a]">
      <div className="absolute z-10 inset-0 bg-linear-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b] "></div>
      <div className="max-w-[1200px] relative z-20 mx-auto flex flex-col gap-8 min-h-screen items-center">
        <form
          onSubmit={handleSubmit}
          className=" w-full max-w-xl mx-auto relative "
        >
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={query || "Search here . . ."}
            className="w-full text-xl p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 shadow-[0_0_15px_#8b5cf6] focus:outline-none focus:shadow-[0_0_25px_#f472b6] transition-all duration-300"
          />
          <Search className="h-15 w-15 absolute right-2 top-1/2 -translate-y-1/2 text-white font-semibold px-4 py-2 rounded-lg shadow-lg  hover:text-[#00ffff] cursor-pointer transition-all duration-300" />
        </form>

        {query ? (
          <div className="w-full flex relative justify-between items-center">
            <div className="text-xl text-start">
              Search Results for : <span className="border-b-2 border-blue-400">{query}</span>{" "}
              {sorting && <div >Sorted by: <span className="border-b-2 border-blue-400">{formatSortLabel(sorting)}</span> </div>}
            </div>
            <Accordion title="Sort Options">
              <button
                onClick={() => setSort("RATING")}
                id="RATING"
                className="block text-lg w-full py-1 text-left hover:text-blue-400 hover:bg-gray-600 transition duration-300"
              >
                Rating
              </button>

              <button
                onClick={() => setSort("RECENCY")}
                id="RECENCY"
                className="block text-lg w-full py-1 text-left hover:text-blue-400 hover:bg-gray-600 transition duration-300"
              >
                Recency
              </button>

              <button
                onClick={() => setSort("VOTE_COUNT")}
                id="VOTE_COUNT"
                className="block text-lg w-full py-1 text-left hover:text-blue-400 hover:bg-gray-600 transition duration-300"
              >
                Vote Count
              </button>

              <button
                onClick={() => setSort("POPULARITY")}
                id="POPULARITY"
                className="block text-lg w-full py-1 text-left hover:text-blue-400 hover:bg-gray-600 transition duration-300"
              >
                Popularity
              </button>
            </Accordion>
          </div>
        ) : (
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Seems pretty empty here...</h2>
            <p className="text-xl ">Search something to discover something</p>
            <figure className="mt-5 slow bg-[rgba(0,0,0,0.5)] rounded-md shadow-[0_4px_15px_rgba(139,92,246,0.5)]">
              <img src={Void} alt="" />
            </figure>
          </div>
        )}

        {results ? (
          <div className="mt-8 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4">
            {results === null && <p>Type something to search...</p>}
            {results === "N/A" && <p>No results.</p>}
            {Array.isArray(results) &&
              results?.map((result) => (
                <Link
                  to={
                    result.media_type === "movie"
                      ? `/movie-details/${result.id}`
                      : `/show-details/${result.id}`
                  }
                  key={result.id}
                  className={`p-2 flex flex-col items-center justify-between w-full md:w-[220px] rounded-md overflow-hidden bg-linear-to-tr from-gray-950 via-gray-800 to-gray-950 shadow-lg hover:scale-102 transition duration-300 `}
                >
                  {result.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                      alt=""
                      className="w-full"
                    />
                  ) : (
                    <div className="w-[200px] h-[300px] flex justify-center items-center text-lg">
                      No Image Available
                    </div>
                  )}
                  <div className="w-full flex flex-col justify-between">
                    <h3 className="text-md py-2 font-bold truncate">
                      {result.title || result.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="text-[#FFD700]" />
                      <p> {result.vote_average?.toFixed(1)}</p>
                      <Vote />
                      <p> {kConverter(result?.vote_count)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        ) : query ? (
          <div>search</div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 opacity-80">
            <SearchX className="w-14 h-14 mb-4" />
            <p className="text-4xl font-semibold text-center mb-2">
              No results found
            </p>
            <p className="text-xl text-muted-foreground">
              Try another keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMedia;
