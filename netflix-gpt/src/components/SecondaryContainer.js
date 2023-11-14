import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="relative -mt-52">
          {movies.nowPlayingMovies && (
            <MoviesList
              title={"Now Playing Movies"}
              movies={movies?.nowPlayingMovies}
            />
          )}
          {movies.popularMovies && (
            <MoviesList
              title={"Popular Movies"}
              movies={movies?.popularMovies}
            />
          )}
          {movies.topRatedMovies && (
            <MoviesList
              title={"Top Rated Movies"}
              movies={movies?.topRatedMovies}
            />
          )}

          {movies.upcomingMovies && (
            <MoviesList
              title={"Upcoming Movies"}
              movies={movies?.upcomingMovies}
            />
          )}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
