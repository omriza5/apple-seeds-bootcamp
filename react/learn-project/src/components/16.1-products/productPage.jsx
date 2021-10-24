import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const ProductPage = () => {
  const { state: product } = useLocation();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <>
      <h1>
        Hey this is a beautiful{" "}
        <span style={{ fontSize: "5rem", color: "#5c3c92" }}>
          {product.title}
        </span>
      </h1>
      <input
        style={{ fontSize: "5rem", color: "#5c3c92" }}
        type="submit"
        onClick={handleBack}
        value="Back"
      />
    </>
  );
};

export default ProductPage;
