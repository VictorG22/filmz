import { Link } from "react-router-dom";
import { useRef } from "react";

const Slider = ({ title, items, linkPath, imagePath }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 300; // pixels to scroll per click
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 relative">
      <h2 className="text-[#e0e0e0] mb-4 text-2xl font-bold">{title}</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded hover:bg-black/70"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded hover:bg-black/70"
      >
        ▶
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 snap-x snap-mandatory"
      >
        {items.map((item) => (
          <Link
            to={`${linkPath}/${item.id}`}
            key={item.id}
            className="shrink-0 w-[250px] snap-start rounded-md overflow-hidden border-2 border-[#00ffff] hover:scale-105 hover:border-[#ffc107] transition duration-200"
          >
            <img
              src={imagePath + item.backdrop_path}
              alt={item.name || item.title}
              className="w-full h-[140px] object-cover"
              loading="lazy"
            />
            <h3 className="text-[#e0e0e0] truncate p-2">
              {item.name || item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;