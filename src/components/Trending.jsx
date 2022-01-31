import React from "react";
import Slider from "./Slider";

const Trending = () => {
  return (
    <div className="trending p-10">
      <h2
        className="font-bold text-xl mb-2 text-white"
        style={{ fontFamily: "Poppins" }}
      >
        Trending
      </h2>
      <Slider />
    </div>
  );
};

export default Trending;
