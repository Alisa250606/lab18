import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/about" className="nav-link">Про мене</NavLink>
        <NavLink to="/my-city" className="nav-link">Моє місто</NavLink>
        <NavLink to="/my-future" className="nav-link">Мій розвиток</NavLink>
      </nav>
    </header>
  );
};

export default Header;
