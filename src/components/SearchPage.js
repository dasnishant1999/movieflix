import React, { useEffect } from "react";
import Movie from "./Movie";
import { useParams } from "react-router-dom";
import { SEARCHAPI } from "../API_PATH";

function SearchPage({ movies, setmovies, setshowPage }) {
  const { query } = useParams();
  console.log(query);

  useEffect(() => {
    fetch(SEARCHAPI + query)
      .then((response) => response.json())
      .then((data) => {
        setmovies(data.results);
        setshowPage(false);
        console.log(data);
      });

    return () => {};
  }, [query]);

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
