import React from "react";
import FetchMovies from "../../logic/fetchMovies";
import "./MoviesSection.css";

const MoviesSection = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies] = FetchMovies(fetchUrl);
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie__section">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            (isLargeRow && movie.paster_path) ||
            (!isLargeRow && movie.backdrop_path && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
          );
        })}
      </div>
    </div>
  );
};

export default MoviesSection;
