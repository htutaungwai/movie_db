import MovieContext from "../../context/movieContext";
import React, { useContext } from "react";
import Card from "../layout/Card";
import Trending from "../Trending";

const SearchMovies = () => {
  const { title, movies, loading } = useContext(MovieContext);
  console.log(movies.length);
  if (!loading && movies.length > 0 && !(title === "")) {
    const { results } = movies[0];
    return (
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {results.map((movie) => {
          return <Card name={movie.name} id={movie.id} key={movie.id} />;
        })}
      </div>
    );
  } else if (title === "") {
    return <h1>No results</h1>;
  } else {
    return <h1>Loading...</h1>;
  }

  // if (loading === false) {
  //
  // } else {
  //   return <h1>Hll</h1>;
  // }
  return <h1>Hll</h1>;
};
//   if (loading && results.length > 0) {
//
//   } else if (loading && results.length > 0) {
//     return <h2>Loading...</h2>;
//   } else {
//     return <h2>No results</h2>;
//   }
// };

export default SearchMovies;
