import React from "react";

const Slide = ({ imgURL, cursor }) => {
  const title = "brave";

  return (
    <div
      onClick={() => {
        console.log("helo world");
      }}
      className={`smallCard text-slate-200 w-32 h-56 bg-white overflow-hidden cursor-${cursor} relative bg-cover bg-center rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg`}
      style={{ backgroundImage: `url(${imgURL})`, minWidth: "127px" }}
    >
      <div className="smallCardDescription bg-neutral absolute left-0 bottom-0 w-full h-16 w-full flex content-center justify-center text-slate-100">
        <div className="p-1">
          <h4 className={title.length > 13 ? "text-sm leading-5 " : "text-lg "}>
            {title.toUpperCase()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Slide;
