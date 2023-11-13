import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();

  async function getMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    console.log(response);
    dispatch(addNowPlayingMovies(response.results));
  }

  useEffect(() => {
    getMovies();
    console.log("Testing");
  }, []);
}
