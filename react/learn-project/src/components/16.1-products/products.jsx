import React, { useEffect, useState } from "react";
import { productsData } from "./store";
import ProductCard from "./product";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="products-list">
        {products.map((product) => (
          <Link
            to={{ pathname: `/products/${product.id}`, state: product }}
            key={product.id}
            className="link-item"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
