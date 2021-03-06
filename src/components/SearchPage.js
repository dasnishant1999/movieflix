import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { useParams } from "react-router-dom";
import { SEARCHAPI } from "../API_PATH";
import { AppContext } from "../AppContext";

function SearchPage() {
  const { movies, setmovies, setshowPage } = useContext(AppContext);

  const { query } = useParams();

  useEffect(() => {
    fetch(SEARCHAPI + query)
      .then((response) => response.json())
      .then((data) => {
        setmovies(data.results);
        setshowPage(false);
        console.log(data);
      });

    return () => {};
  }, [query, setmovies, setshowPage]);

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
