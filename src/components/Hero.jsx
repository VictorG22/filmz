import React, { useState } from "react";
import HeroImg from "../assets/online-media.svg";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import BlurCircle from "./BlurCircle";

const Hero = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <section id="hero" className="py-20">
      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center justify-center ">
        <BlurCircle top="100px" left="-200px" />
        <BlurCircle bottom="0" left="1000px" />

        <div className="flex flex-col items-center my-24 text-[#e0e0e0] text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.7)] mb-4">
            Welcome to Filmz{" "}
          </h1>
          <h2 className="text-xl max-md:max-w-[400px] md:text-3xl text-gray-300 drop-shadow-md uppercase mb-20">
            the biggest and up-to-date media library in the united states!!{" "}
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-xl relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search here . . ."
              className="w-full text-xl p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 shadow-[0_0_15px_#8b5cf6] focus:outline-none focus:shadow-[0_0_25px_#f472b6] transition-all duration-300"
            />
            <Search className="h-15 w-15 absolute right-2 top-1/2 -translate-y-1/2 text-white font-semibold px-4 py-2 rounded-lg shadow-lg  hover:text-[#00ffff] cursor-pointer transition-all duration-300" />
          </form>
        </div>
        <img
          src={HeroImg}
          alt=""
          className=" slow rounded-md shadow-[0_4px_15px_rgba(139,92,246,0.5)] w-[70%]"
        />
      </div>
    </section>
  );
};

export default Hero;
