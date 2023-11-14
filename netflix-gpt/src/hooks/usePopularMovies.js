import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

export default function usePopularMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovies() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const response = await data.json();
      console.log(response);
      dispatch(addPopularMovies(response.results));
    }

    getMovies();
  }, [dispatch]);
}
