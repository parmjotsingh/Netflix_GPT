import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

export default function useTopRatedMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovies() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const response = await data.json();
      console.log(response);
      dispatch(addTopRatedMovies(response.results));
    }

    getMovies();
  }, [dispatch]);
}
