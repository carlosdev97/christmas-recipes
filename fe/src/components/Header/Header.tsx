import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./Header.css";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <header className="header">
      <nav
        className={`header__navbar ${isMenuOpen ? "header__navbar-open" : ""}`}
      >
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__item">
            <Link to="/addrecipe">Add Recipe</Link>
          </li>
          <li className="header__item">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="header__item">
            <Link to="/users">Users</Link>
          </li>
          <li className="header__item">
            <Link to="/register">User Register</Link>
          </li>
        </ul>
      </nav>
      <IoMdMenu className="header__button" onClick={toggleMenu} />
    </header>
  );
};
