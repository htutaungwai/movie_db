import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SearchMovies from "./search/SearchMovies";
import MovieContext from "../context/movieContext";

const Search = () => {
  const { title } = useContext(MovieContext);

  return (
    <div className="search">
      <h2>Showing results for {title} </h2>
      <SearchMovies />
    </div>
  );
};

export default Search;
