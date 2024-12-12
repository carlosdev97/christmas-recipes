import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
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
            <a href="">Users</a>
          </li>
          <li className="header__item">
            <a href="">Register User</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
