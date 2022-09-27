import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  const atc = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} atc={atc}></Product>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
