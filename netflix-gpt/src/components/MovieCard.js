import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 mr-5">
      <img alt="Movie Card" src={`${IMG_URL}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
