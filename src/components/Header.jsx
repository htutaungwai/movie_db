import React from "react";
import { Link } from "react-router-dom";
import Nav from "./layout/Nav";
import SearchInput from "./search/SearchInput";

const Header = () => {
  return (
    <div className="header bg-neutral p-2 h-32 flex justify-around content-center ">
      <div className="flex items-center justify-around space-x-2  w-full">
        <div className="item flex content-center justify-center ">
          <Link to={"/"}>
          <h1 className="text-4xl font-medium leading-tight mt-0 mb-2 text-slate-100">
            MovieDB
          </h1>
          </Link>
        </div>

        <div className="item flex content-center justify-center gap-8">
          <Nav />
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
