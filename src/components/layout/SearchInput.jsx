import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <input type="text" />
      <button>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchInput;
