import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const[trailerId , setTrialerId] = useState(null)
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
//   const dispatch = useDispatch();
    useMovieTrailer(setTrialerId, movieId);


  return (
    <div className=" w-screen">
      <iframe
       className="w-screen aspect-video"
        // src="https://www.youtube.com/embed/Idh8n5XuYIA?si=5guhcDxUxPUI51N8"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?si=5guhcDxUxPUI51N8?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
