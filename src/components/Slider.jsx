import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Slide from "./layout/Slide";

const Slider = () => {
  const [pressed, setPressed] = useState(false);
  const [cursor, setCursor] = useState("pointer");
  const [startX, setStartX] = useState(0);
  const [X, setX] = useState(0);

  const handleMouseDown = (e) => {
    setPressed(true);
    setCursor("grabbing");
    setStartX(e.clientX);
  };

  window.addEventListener("mouseup", () => {
    setStartX(0);
    setPressed(false);
    setCursor("grab");
    checkBoundaries();
  });

  const handleMouseMove = (e) => {
    if (!pressed) return;
    const totalX = (e.clientX - startX) / 10;
    setX(X + totalX);
  };

  const checkBoundaries = () => {
    if (
      parseInt(
        document.querySelector(".inner-slider").getClientRects()[0].left
      ) > 20 &&
      X > 0
    ) {
      setTimeout(() => {
        setX(0);
      }, 1000);
    }
  };

  const backToFirstSlide = () => {
    setX(0);
  };
  const imgURL =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSupq8WkAnqFOB-NkcGnKDJM3D9AOH_3vK4exSxwue8oulYGIKS";
  return (
    <div className="slider-container mt-6">
      <div
        className="slider relative h-60 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ cursor: cursor }}
      >
        <div
          className="inner-slider flex gap-2 absolute h-full select-none"
          style={{
            transform: `translateX(${X}px)`,
            transition: "0.5s ease",
          }}
        >
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <Slide imgURL={imgURL} cursor={cursor} />
          <button onClick={backToFirstSlide} className="ml-5">
            <BsFillArrowLeftCircleFill size={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
