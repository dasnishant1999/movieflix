import React from "react";

function Movie({ movie }) {
  const setVoteClass = (vote) => {
    if (vote >= 7.5) {
      return "green";
    } else if (vote >= 5.5) {
      return "orange";
    } else return "red";
  };

  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt='poster' ></img>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={setVoteClass(movie.vote_average)}>
          {movie.vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <h4>Overview:</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
