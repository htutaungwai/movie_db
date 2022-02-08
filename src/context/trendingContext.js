import { createContext, useState, useEffect } from "react";


const trendingContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;


export const TrendingContextProvider = ({children}) => {
    const [pressed, setPressed] = useState(false);
    const [cursor, setCursor] = useState("pointer");
    const [startX, setStartX] = useState(0);
    const [X, setX] = useState(0);
    const [trendings, setTrendings] = useState([]);
    const [trendingLoaded, setTrendingLoaded] = useState(false);


    const handleMouseDown = (e) => {
        setPressed(true);
        setCursor("grabbing");
        setStartX(e.clientX)
      };

      const fetchTrendingThisWeekMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
        const data = await response.json();
        setTrendings([...trendings, data]);
        setTrendingLoaded(true);
      }



      useEffect(() => {
        setTrendings([])
       fetchTrendingThisWeekMovies();
      }, []);

      useEffect(() => {
        if(pressed){
          window.addEventListener("mouseup", dragOff)
        }else {
         
          window.removeEventListener("mouseup", null )
        }
      }, [pressed]);


      const dragOff = () => {
        console.log("mouseup event stoopped.");
        setStartX(0);
        setPressed(false);
        setCursor("grab");
        checkBoundaries();
      }
    
    
    
    
    
      const handleMouseMove = (e) => {
        if (!pressed) return;
        const totalX = (e.clientX - startX) / 10;
        setX(X + totalX);
      };
    
      
    
      const checkBoundaries = () => {
        const left = () => {
          if(document.querySelector(".inner-slider")){
           return parseInt(
              document.querySelector(".inner-slider").getClientRects()[0].left
            );
          }else {
            return 1
          }
        };
        if (
          left() > 20 &&
          X > 0
        ) {
          setTimeout(() => {
            setX(0);
          }, 1000);
        }
      };
    
      const backToFirstSlide = () => {
        setX(0);
      };



      console.log(trendings);
    return (
        <trendingContext.Provider value={{
          pressed, setPressed, cursor, setCursor, startX, setStartX, X, setX, trendings: trendings[0], setTrendings, handleMouseDown, fetchTrendingThisWeekMovies, handleMouseMove, backToFirstSlide, trendingLoaded
        }}>
            {children}
        </trendingContext.Provider>
    )
}

export default trendingContext;