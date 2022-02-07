import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
export const MovieContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {

    setButtons([]);
    setCurrentPage(1);
    fetchSearchMovieIds();
    checkPages(currentPage, totalPages);
  
  }, [title]);


  useEffect(() => {
    
    fetchNewPage();
    checkPages(currentPage, totalPages);
  }, [currentPage])

  
  const handleSpecificBtn = (num) => {
    if(num > 0 && num < totalPages) {
    window.scrollTo(100, 100);
    checkPages(currentPage, totalPages);
    setMovies([]);
    setCurrentPage(num)}
  }

  const handleLeft = () => {
    if(currentPage > 1 ){
      window.scrollTo(100, 100);
      checkPages(currentPage, totalPages);
      setMovies([])
      setCurrentPage(currentPage-1);
    }
  }

  const handleRight = () => {
    if(currentPage < totalPages){
      window.scrollTo(100, 100);
      checkPages(currentPage, totalPages);
      setMovies([])
      setCurrentPage(currentPage+1);
    }
  }


  const checkPages = (currentIndex, totalIndex) => {
    let rightBoundary = Math.floor(currentIndex /5) * 5 + 5;
    let leftBoundary = (Math.floor((currentIndex)/5) * 5);
    leftBoundary <= 0 ? leftBoundary = 1 : leftBoundary = leftBoundary;
    rightBoundary >= totalIndex ?  rightBoundary = totalIndex : rightBoundary = rightBoundary ;
    let newButtonArray = [];
    for(let x = leftBoundary ; x <= rightBoundary; x++){
      newButtonArray.push(x);
    }
    console.log(newButtonArray)
     setButtons(newButtonArray);
   }

   const fetchNewPage = async () => {
     
    setLoading(true);
    fetchSearchMovieIds();
   }

  const fetchSearchMovieIds = async () => {
    
    if (title === "") {
      return;
    }
    const query = title.replace(" ", "%20");
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`);
    const data = await response.json();
    setTotalPages(data.total_pages);
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
        checkPages,
        buttons,
        setButtons,
        handleLeft,
        handleRight,
        totalPages,
        currentPage,
        handleSpecificBtn
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
