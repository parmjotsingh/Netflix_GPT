import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getMoivesVideoList(id) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      ).catch((err) => console.error(err));
      const data = await response.json();
      const trailerVideos = data.results.filter(
        (video) => video.type === "Trailer"
      );
      let trailerVideo;
      if (!trailerVideos) {
        // If there is no video then first Video of data
        trailerVideo = data[0];
      } else {
        // If more than one trailer pick the first one
        trailerVideo = trailerVideos[0];
      }
      dispatch(addMovieTrailer(trailerVideo));
    }

    getMoivesVideoList(id);
  }, [dispatch, id]);
};

export default useMovieTrailer;
