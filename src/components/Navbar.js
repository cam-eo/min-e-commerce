import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        <p>W</p>
      </div>
      <div className="navbar__items"></div>
      <div className="navbar__item">
        <span>Categories</span>
      </div>
    </div>
  );
}

export default Navbar;
