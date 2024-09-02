import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useSelector } from "react-redux";

const useMovieTrailer = (setTrialerId, movieId) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrialerId(trailer.key);
    // dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
