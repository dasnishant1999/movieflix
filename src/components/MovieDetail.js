import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movieDetail, setmovieDetail] = useState();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4582b75f005ade13c24a25076c1c2ba0&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setmovieDetail(data);
      });
    return () => {};
  }, [id]);

  return (
    <>
      {movieDetail && (
        <div className=" movieDetail">
          <div
            className="banner-img"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(http://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`,
              backgroundPosition: "center center",
            }}
          >
            <img
              className="poster-img"
              src={`http://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
              alt=""
            />
            <div className="banner-content">
              <h1>{movieDetail.original_title}</h1>
              {movieDetail.tagline && <h2>{movieDetail.tagline}</h2>}
              <h2>Rating: {movieDetail.vote_average}</h2>
              <strong>Duration: {movieDetail.runtime}min</strong>
            </div>
          </div>
          <div className="more-movie-details">
            <h3>Overview:</h3>
            <p>{movieDetail.overview}</p>
            <h4>Release Date: {movieDetail.release_date}</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
