import React, { useEffect } from "react";
import Movie from "./Movie";
import { APIURL } from "../API_PATH";

function Movies({ movies, setmovies }) {
  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setmovies(data.results);
      });
    return () => {};
  }, []);

  return (
    <div className="movies">
      {movies &&
        movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </div>
  );
}

export default Movies;
