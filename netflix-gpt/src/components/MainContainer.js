import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./ViewBackground";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movie) return;

  const { original_title, overview, id } = movie[0];

  return (
    <>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground id={id} />
    </>
  );
};

export default MainContainer;
