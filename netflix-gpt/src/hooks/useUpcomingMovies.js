import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovies() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const response = await data.json();
      console.log(response);
      dispatch(addUpcomingMovies(response.results));
    }
    getMovies();
    console.log("useEffect");
  }, [dispatch]);
}
