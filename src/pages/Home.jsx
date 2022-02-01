import React, { useContext } from "react";
import MovieContext from "../context/movieContext";

const Home = () => {
  const { users } = useContext(MovieContext);
  return <div>dd {users}</div>;
};

export default Home;
