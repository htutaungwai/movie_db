import { useState, useEffect, useContext } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import SampleCard from "./layout/SampleCard";
import trendingContext from "../context/trendingContext";
import Slide from "./layout/Slide";
const API_KEY = process.env.REACT_APP_API_KEY;

const Slider = () => {
 const {pressed, setPressed, cursor, setCursor, startX, setStartX, X, setX, trendings, setTrendingThisWeek, handleMouseDown, fetchTrendingThisWeekMovies, handleMouseMove,backToFirstSlide, trendingLoaded} = useContext(trendingContext)
  
 

  


 

  

 

 
  
  
 


    if(trendingLoaded){
      return (
        <div className="slider-container mt-6">
          <div
            className="slider relative w-62 h-80 overflow-hidden cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            
            style={{ cursor: cursor }}
          >
            <div
              className="inner-slider flex gap-2 absolute h-full select-none"
              style={{
                transform: `translateX(${X}px)`,
                transition: "0.5s ease",
              }  }
            >
              {
                trendingLoaded && trendings.results.map((item) => {
                  return <Slide poster={item.poster_path} key={item.id} title={item.title}/>
                })
              }
             
              
              <div className="flex items-center ml-5">
                <button onClick={backToFirstSlide} className="hover_red" >
                <BsFillArrowLeftCircleFill size={50} />
              </button>
              </div>
            </div>
             
          </div>
        </div>
      );
    }else{
      return <div>Loading</div>
    }
  
};

export default Slider;
