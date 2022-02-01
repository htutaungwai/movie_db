import React from "react";

const Card = ({ name }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg max-w-full bg-slate-800">
      <img
        className="cursor-pointer w-full max-h-48 object-cover object-center"
        src="https://images.pexels.com/photos/9921256/pexels-photo-9921256.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
