import React from "react";
import Movie from "./Movie";

function SearchPage({ movies }) {
  return (
    <div className="movies">
      {movies &&
        movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </div>
  );
}

export default SearchPage;
