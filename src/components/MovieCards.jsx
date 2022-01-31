import React from "react";
import Card from "./layout/Card";
import Trending from "./Trending";

const MovieCards = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Card />
    </div>
  );
};

export default MovieCards;
