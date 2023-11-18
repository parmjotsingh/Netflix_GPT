import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="pl-12 py-4 text-white">
      <h1 className="text-xl font-medium pb-2">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieName={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
