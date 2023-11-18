import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTSearchResult = () => {
  const { gptMovies, tmdbResult } = useSelector((store) => store.gpt);
  if (!gptMovies) return;
  return (
    <div className="p-4 m-4 bg-black text-white">
      {gptMovies.map((movie, index) => (
        <MoviesList
          key={movie}
          movies={tmdbResult[index]?.results}
          title={movie}
        />
      ))}
    </div>
  );
};

export default GPTSearchResult;
