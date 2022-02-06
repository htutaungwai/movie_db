import MovieContext from "../../context/movieContext";
import React, { useContext } from "react";
import Card from "../layout/Card";
import Trending from "../Trending";

const SearchMovies = () => {
  const { title, movies, loading } = useContext(MovieContext);
  

  if (!loading && movies.length > 0 && title !== "") {
    const { results } = movies[0];
    console.log(results)
 
    return (<div>
      <div>
        <button>1</button>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative">
        {results.map((movie) => {
          return <Card name={movie.title} id={movie.id} key={movie.id} poster={movie.poster_path} vote={movie.vote_average} />;
        })}

        {results.length ===0 && <div className="w-full h-screen flex justify-center  ">
        <h2 className="text-2xl font-bold">We don't find anything. :(</h2>
      </div>
    }
      </div>
      </div>
    );
  } else if (title === "") {
    return <div className="w-full h-screen flex justify-center items-center">
      <h2 className="font-bold text-7xl">No results</h2>
    </div>;
  } else {
    return <div className="w-full h-screen flex justify-center items-center "> 
      <div className="lds-ripple"><div></div><div></div></div>
    </div>;
  }

 
};

export default SearchMovies;