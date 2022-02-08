import React from "react";

const Slide = ({poster, cursor, title }) => {
  

  return (
    <div
      onClick={() => {
        console.log("helo world");
      }}
      className={`smallCard text-slate-200 w-56 h-72 bg-white overflow-hidden cursor-${cursor} relative bg-cover bg-center rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg`}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`, minWidth: "127px" }}
    >
      <div className="smallCardDescription bg-neutral absolute left-0 bottom-0 w-full h-16 w-full flex content-center justify-center text-slate-100">
        <div className="p-1">
        {/* className={title.length > 13 ? "text-sm leading-5 " : "text-lg "} */}
          <h4 >
            {title.toUpperCase()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Slide;
