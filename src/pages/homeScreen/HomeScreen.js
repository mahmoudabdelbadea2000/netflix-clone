import React from "react";
import Banner from "../../components/banner/Banner";
import MoviesSection from "../../components/moviesSection/MoviesSection";
import requests from "../../hooks/requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Banner />
      <MoviesSection title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <MoviesSection title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesSection
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <MoviesSection
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MoviesSection
        title="Comedy Movies"
        fetchUrl={requests.fetchComdyMovies}
      />
      <MoviesSection
        title="Decomentaries Movies"
        fetchUrl={requests.fetchDecomentaries}
      />
    </div>
  );
};

export default HomeScreen;
