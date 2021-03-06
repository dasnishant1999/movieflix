import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { APIURL } from "../API_PATH";
import { AppContext } from "../AppContext";

function Movies() {
  const { movies, setmovies, pageNo, setpageNo, showPage, setshowPage } =
    useContext(AppContext);

  useEffect(() => {
    fetch(APIURL + pageNo)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setmovies(data.results);
        setshowPage(true);
      });
    return () => {};
  }, [pageNo, setmovies, setshowPage]);

  const nextButtonHandler = () => {
    if (pageNo <= 500) {
      setpageNo(pageNo + 1);
      window.scrollTo(0, 0);
    }
  };

  const previousButtonHandler = () => {
    if (pageNo > 1) {
      setpageNo(pageNo - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="movies">
        {movies &&
          movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
      </div>
      {showPage && (
        <div className="pagination">
          <button className="btn" onClick={previousButtonHandler}>
            Previous
          </button>
          <p>Page {pageNo}</p>
          <button className="btn" onClick={nextButtonHandler}>
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Movies;
