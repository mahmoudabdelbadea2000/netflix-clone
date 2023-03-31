import React from "react";
import { Container } from "react-bootstrap";
import FetchMovieToBanner from "../../logic/fetchMovieToBanner";
import "./Banner.css";

const Banner = () => {
  const [movie, truncate] = FetchMovieToBanner();
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.poster_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="banner__contents">
          <h1 className="banner__title">{movie.name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">play</button>
            <button className="banner__button">my list</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie.overview, 150)}
          </h1>
        </div>
      </Container>
      <div className="banner__fadebottom" />
    </header>
  );
};

export default Banner;
