import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieName }) => {
  if (!posterPath) {
    return (
      <div className="w-44 mr-5 font-mono p-2 flex justify-center items-center bg-gradient-to-br from-red-800 to-neutral-600">
        <p className="font-semibold  text-2xl italic text-center">
          {movieName}
        </p>
      </div>
    );
  }
  return (
    <div className="w-44 mr-5">
      <img alt="Movie Card" src={`${IMG_URL}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
