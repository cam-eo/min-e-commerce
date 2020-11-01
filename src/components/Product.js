import React from "react";
import "../css/Product.css";

function Product({ id, title, image, price }) {
  return (
    <div className="product">
      <img
        className="product__image product__image--fade"
        src={image}
        alt="Product Image"
      />
      <div className="product__infoContainer">
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Product;
