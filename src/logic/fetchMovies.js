import { useEffect, useState } from "react";
import instance from "../hooks/axios";

const FetchMovies = (fetchData) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const get = async () => {
      const request = await instance.get(fetchData);
      setMovies(request.data.results);
      return request.data.results;
    };
    get();
  }, [fetchData]);

  return [movies];
};

export default FetchMovies;
