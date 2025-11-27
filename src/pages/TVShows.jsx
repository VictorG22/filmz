import MediaList from "../components/MediaList";

const TVShows = () => {

  return (
    <div className="relative bg-linear-to-b from-[#0a1a3a] via-[#4b0d2a] to-[#0a1a3a]">
      <div className="relative z-20">
        <MediaList category={"on_the_air"} mediaType={'show'}/>
        <MediaList category={"airing_today"} mediaType={'show'}/>
        <MediaList category={"popular"} mediaType={'show'}/>
        <MediaList category={"top_rated"} mediaType={'show'}/>
      </div>
        <div className="absolute z-10 inset-0 bg-linear-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b]" />
    </div>
  );
};

export default TVShows;
