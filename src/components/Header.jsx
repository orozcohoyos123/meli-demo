import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from '../assets/Logo_ML.png';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header className="header">
        <div className="header__wrapper row">
          <Link to='/' className="header__logo col-2 col-md-1">
            <img src={Logo} alt="Meli"/>
          </Link>
          <SearchBox/>
        </div>
    </header>
  );
};

export default Header;
