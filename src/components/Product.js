import React from "react";
import "../css/Product.css";

function Product({ id, title, image, price }) {
  return (
    <div className="product">
      <img src={""} alt="Product Image" />
      <div className="product__title"></div>
    </div>
  );
}

export default Product;
