import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const ViewBackground = ({ id }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id);
  return (
    <>
      <iframe
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?si=knxFh48fWCs0YdvS@&autoplay=1&mute=1&loop=1&playlist=${movieTrailer?.key}&controls=0&disablekb=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="aspect-video w-full "
      ></iframe>
    </>
  );
};

export default ViewBackground;
