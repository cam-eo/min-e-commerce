import React from "react";
import homeSplash from "../images/home_splash.jpg";
import "../css/Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__splashContainer">
        <img src={homeSplash} alt="MIN" />
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
