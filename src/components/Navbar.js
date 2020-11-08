import React from "react";
import "../css/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        <p>W</p>
      </div>
      <div className="navbar__searchContainer">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="navbar__items">
        <div className="navbar__item">
          <AccountIcon />
          <p>Login</p>
        </div>
        <div className="navbar__item">
          <AccountIcon />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
