import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../context/movieContext";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const { title, setTitle, setMovies } = useContext(MovieContext);
  let navigate = useNavigate();

  const handleChange = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "" || searchText.toLocaleLowerCase() === title) {
      return;
    } else {
      setMovies([]);
      setTitle(searchText.toLocaleLowerCase());

      navigate("/search");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative  text-base ">
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          className="text-black"
        />
        <div
          className="w-50  absolute cursor-pointer bg-slate-400 hover:bg-slate-600  top-0 right-0 left-36 bottom-0 flex justify-center content-center"
          style={{ transition: "0.3s ease-in" }}
        >
          <button className="text-center">
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
