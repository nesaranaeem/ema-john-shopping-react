import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
const Product = (props) => {
  const { atc, product } = props;
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer : {seller}</small>
        </p>
        <p>
          <small>Rating : {ratings} stars</small>
        </p>
      </div>
      <button className="add-to-cart-btn" onClick={() => atc(product)}>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
