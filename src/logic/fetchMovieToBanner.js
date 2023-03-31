import { useEffect, useState } from "react";
import instance from "../hooks/axios";
import requests from "../hooks/requests";

const FetchMovieToBanner = () => {
  const [movie, setMovie] = useState([]);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  useEffect(() => {
    const get = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    get();
  }, []);

  return [movie, truncate];
};

export default FetchMovieToBanner;
