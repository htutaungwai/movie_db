import React from "react";

const Nav = () => {
  return (
    <div className="nav ">
      <ul className="flex">
        <li className="mr-6">
          <a className="text-slate-300 hover:text-slate-100" href="#">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a className="text-slate-300 hover:text-slate-100" href="#">
            Series
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
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
