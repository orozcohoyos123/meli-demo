import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import SearchLogo from "../assets/ic_Search.png";
import './styles/SearchBox.scss';


/**
 * Component for showing a search input element
 * 
 * @component
 * @example
 * return (<SearchBox />)
 */
const SearchBox = () => {
  /**
   * Hook useHistory to redirect when form data is submitted
   */
  const history = useHistory();

  /**
   * Hook useState query, look for information applying this query filter
   * @example setQuery('nintendo')
   */
  const [query, setQuery] = useState("");
  
  /**
   * function handleSubmit push a new entry in history stack to 
   * redirect to products list view when the form is submitted
   * @param {event} e catch the event to prevent the form's default behavior
   */
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
