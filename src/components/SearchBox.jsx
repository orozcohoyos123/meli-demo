import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import SearchLogo from "../assets/ic_Search.png";
import './styles/SearchBox.scss';


const SearchBox = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
        
    if (!query.trim()) return;
    
    history.push({
      pathname: '/items',
      search: `?search=${query.trim()}`
    })
  };

  return (
    <div className="searchBox col-9 col-md-10">
      <form onSubmit={handleSubmit}>
        <input 
          className="searchBox__input"
          name="query"
          type="text" 
          placeholder="Nunca dejes de buscar" 
          onChange={e => setQuery(e.target.value)}/>
        <button type="submit" className="searchBox__button">
          <img src={SearchLogo} alt="Search" />
        </button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func
};

export default SearchBox;
