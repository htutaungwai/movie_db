import React, { useContext } from "react";
import Trending from "../components/Trending"
import { TrendingContextProvider } from "../context/trendingContext";

const Home = () => {
  
  return <div>
    <TrendingContextProvider>
    <Trending />
    </TrendingContextProvider>
  </div>;
};

export default Home;
