import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="header__list">
          <li className="header__item">
            <a href="">Home</a>
          </li>
          <li className="header__item">
            <a href="">Add Recipe</a>
          </li>
          <li className="header__item">
            <a href="">Favorites</a>
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
