import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SearchMovies from "../components/search/SearchMovies"
import MovieContext from "../context/movieContext";

const Search = () => {
  const { title } = useContext(MovieContext);

  return (
    <div className="search">
      {title && <h2 className="text-center m-3">Showing results for " <span className="text-2xl text-slate-50">{title.toUpperCase()}</span> "</h2>}
      <SearchMovies />
    </div>
  );
};

export default Search;
