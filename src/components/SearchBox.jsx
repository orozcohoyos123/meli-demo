import React, { useRef } from "react";
import { useHistory } from 'react-router-dom';
import SearchLogo from "../assets/ic_Search.png";
import './styles/SearchBox.scss';


const SearchBox = () => {
  const history = useHistory();
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    if (!formData.get('query').trim()) return;

    history.push({
      pathname: '/items',
      search: `?search=${formData.get('query').trim()}`
    })
  };

  return (
    <div className="searchBox col-9 col-md-10">
      <form ref={form} onSubmit={handleSubmit}>
        <input 
          name="query"
          type="text" 
          placeholder="Nunca dejes de buscar" />
        <button type="submit">
          <img src={SearchLogo} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
