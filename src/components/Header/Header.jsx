import React, { useState } from "react";
import "./Header.css";
// import "../../styles/GlobalStyles.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container-header">

          <a className="header-title" href="/home">
          <img src="/src/assets/logo.png" alt="logo" className="logo" width="50" height="50"/>
          BCWS By Matt
          </a>
          

        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={isOpen ? "bar open" : "bar"}></div>
            <div className={isOpen ? "bar open" : "bar"}></div>
            <div className={isOpen ? "bar open" : "bar"}></div>
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/simulator">Simulator</a>
            </li>
            <li>
              <a href="/glossary">Glossary</a>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
}

export default Header;
