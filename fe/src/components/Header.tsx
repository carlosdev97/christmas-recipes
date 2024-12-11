import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="header__list">
          <li className="header__item">
            <a href="">Sing up</a>
          </li>
          <li className="header__item">
            <a href="">Log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
