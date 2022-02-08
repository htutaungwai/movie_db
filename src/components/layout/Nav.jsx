import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav ">
      <ul className="flex">
        <li className="mr-6">
          <Link to={"/"}>
          <p className="text-slate-300 hover:text-slate-100" href="#">
            Home
          </p>
          </Link>
        </li>
        <li className="mr-6">
        <Link to={"/"}>
          <p className="text-slate-300 hover:text-slate-100" href="#">
            Home
          </p>
          </Link>
        </li>
        <li className="mr-6">
        <Link to={"/"}>
          <p className="text-slate-300 hover:text-slate-100" href="#">
            Home
          </p>
          </Link>
        </li>
        <li className="mr-6">
        <Link to={"/"}>
          <p className="text-slate-300 hover:text-slate-100" href="#">
            Home
          </p>
          </Link>
        </li>
        {/* <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">
            Disabled
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
