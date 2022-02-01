import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
export const MovieContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviePoster, setMoviePoster] = useState("");

  useEffect(() => {
    fetchSearchMovies();
  }, [title]);

  const fetchSearchMovies = async () => {
    if (title === "") {
      return;
    }
    const response = await fetch(`
    https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${title}&page=1`);
    const data = await response.json();
    if (data) {
      setMovies([...movies, data]);
      setLoading(false);
    }
  };

  const fetchMoviePoster = async (movie_id) => {
    if (title !== "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      if (data) {
        console.log(data);
      }
    }
  };
  return (
    <MovieContext.Provider
      value={{
        title,
        setTitle,
        movies: [...movies],
        loading,
        setLoading,
        setMovies,
        fetchMoviePoster,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
