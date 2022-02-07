import React from "react";

const Card = ({ name, poster, vote }) => {

  const checkvote = (rating) =>{
    if(rating >= 7){
      return "bg-lime-600"
    }else if(rating >= 4){
      return "bg-orange-500"
    }else if(rating === 0){
      return "bg-slate-800"
    }
    else{
      return "bg-fuchsia-500"
    }
  }
  const color = checkvote(vote);
 
  return (
    <div className=" rounded overflow-hidden shadow-lg w-58 bg-slate-800 relative">
      <div  className={`absolute p-4 rounded-bl-xl font-bold right-0 ${color}`}>{vote == 0 ? "NA" : vote}</div>
      <img
        className="cursor-pointer w-full h-72 object-cover"
        src= {`https://image.tmdb.org/t/p/original/${poster}`}
        alt="Mountain"
      />
      <div className="px-6 py-4 cursor-pointer">
        <div
          className="font-bold text-xl mb-2 text-white"
          style={{ fontFamily: "Poppins" }}
        >
          {name}
        </div>
        {/* <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p> */}
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default Card;
