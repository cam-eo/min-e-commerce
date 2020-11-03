import React from "react";
import homeSplash from "../images/home_splash.jpg";
import productImageTemplate from "../images/product_image_template.jpg";
import "../css/Home.css";
import Product from "./Product.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__splashContainer">
        <img src={homeSplash} alt="MIN" />
      </div>
      <div className="home__row">
        <Product
          id={1}
          image={productImageTemplate}
          price={200}
          title={"Speaker"}
          descriptionShort={"This speaker plays nice music ;)"}
        />
        <Product
          id={1}
          image={productImageTemplate}
          price={200}
          title={"Speaker"}
          descriptionShort={"This speaker plays nice music ;)"}
        />
        <Product
          id={1}
          image={productImageTemplate}
          price={200}
          title={"Speaker"}
          descriptionShort={"This speaker plays nice music ;)"}
        />
      </div>
      <div className="home__row">
        <Product
          id={1}
          image={productImageTemplate}
          price={200}
          title={"Speaker"}
          descriptionShort={"This speaker plays nice music ;)"}
        />
        <Product
          id={1}
          image={productImageTemplate}
          price={200}
          title={"Speaker"}
          descriptionShort={"This speaker plays nice music ;)"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
