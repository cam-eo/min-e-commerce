import React from "react";
import homeSplash from "../images/home_splash.jpg";
import productImageTemplate from "../images/product_image_template.jpg";
import "../css/Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__splashContainer">
        <img src={homeSplash} alt="MIN" />
      </div>
      <div className="home__row">
        <Product
          d={1}
          image={productImageTemplate}
          price={200}
          title={"Speaker"}
        />
        <Product d={2} image={productImageTemplate} />
        <Product d={3} image={productImageTemplate} />
      </div>
    </div>
  );
}

export default Home;
