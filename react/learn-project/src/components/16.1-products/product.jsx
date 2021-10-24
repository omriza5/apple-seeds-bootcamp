import React from "react";
import "./style.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <h5>Price: {product.price}$</h5>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
