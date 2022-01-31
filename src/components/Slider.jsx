import React from "react";
import Slide from "./layout/Slide";

const Slider = () => {
  const imgURL =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSupq8WkAnqFOB-NkcGnKDJM3D9AOH_3vK4exSxwue8oulYGIKS";
  return (
    <div className="slider flex gap-2 overflow-hidden">
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
      <Slide imgURL={imgURL} />
    </div>
  );
};

export default Slider;
