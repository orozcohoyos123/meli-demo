import React from "react";
import './styles/SearchBox.scss';
import SearchLogo from "../assets/ic_Search.png";

const SearchBox = () => {
  return (
    <div className="searchBox col-9 col-md-10">
      <input type="text" placeholder="Nunca dejes de buscar"/>
      <button type="button">
        <img src={SearchLogo} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBox;
