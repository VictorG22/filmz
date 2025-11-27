import MediaList from "../components/MediaList";

const Movies = () => {

  return (
    <div className="relative bg-linear-to-b from-[#0a1a3a] via-[#4b0d2a] to-[#0a1a3a]">
      <div className="relative z-20">
        <MediaList category={"now_playing"} mediaType={'movie'}/>
        <MediaList category={"upcoming"} mediaType={'movie'}/>
        <MediaList category={"popular"} mediaType={'movie'}/>
        <MediaList category={"top_rated"} mediaType={'movie'}/>
      </div>
        <div className="absolute z-10 inset-0 bg-linear-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b]" />
    </div>
  );
};

export default Movies;
