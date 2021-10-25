import React, { useEffect, useState } from "react";

const SimpleFetch = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch("https://swapi.dev/api/films/1/");
      const movie = await response.json();
      setMovie(movie);
    };
    getMovie();
  }, []);
  return (
    <>
      <h1>{movie.title}</h1>
      <h1>{movie.director}</h1>
    </>
  );
};

export default SimpleFetch;
