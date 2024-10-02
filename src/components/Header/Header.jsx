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
      <div className="container">
        <h1>BCWS By Matt</h1>
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
      <hr />
    </header>
  );
}

export default Header;
