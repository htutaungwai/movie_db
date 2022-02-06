import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
export const MovieContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

 

  useEffect(() => {
    fetchSearchMovieIds();
  }, [title]);


  const fetchSearchMovieIds = async () => {
    if (title === "") {
      return;
    }
    const query = title.replace(" ", "%20")
    
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    
    const data = await response.json();
    
    setMovies([...movies, data]);
    setLoading(false);
   
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
