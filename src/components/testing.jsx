import { Link } from "react-router-dom";
import Slider from "react-slick"; // <- react-slick

const Testing = ({ items }) => {
  const image_path = "https://image.tmdb.org/t/p/original";

  if (!items || items.length === 0) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // number of items visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h2 className="text-[#e0e0e0] mb-4 text-2xl font-bold">Random</h2>

      <Slider {...settings}>
        {items.map((item) => {
          const itemTitle = item.title || item.name;

          return (


<Link
  to={`/`}
  key={item.id}
  className="group relative shrink-0 max-w-[200px] rounded-md overflow-hidden border-2 border-[#00ffff] transition-transform duration-200 hover:scale-105 hover:border-[#ffc107]"
>
  {/* Image */}
  <img
    className="w-full h-[140px] object-cover transition-shadow duration-300 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"
    src={image_path + item.backdrop_path}
    alt={itemTitle}
    loading="lazy"
  />

  {/* Bottom overlay */}
  <div className="absolute bottom-0 left-0 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
    <h3 className="text-white font-semibold text-center truncate">
      {itemTitle}
    </h3>
  </div>
</Link>

          );
        })}
      </Slider>
    </div>
  );
};

export default Testing;
