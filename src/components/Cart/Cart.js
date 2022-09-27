import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  // free shipping rule
  let freeShipping = false;
  if (cart.length > 4 && cart.length < 11) {
    shipping = 0;
    freeShipping = true;
  }
  //5% tax
  let tax = totalPrice * 5;
  tax = (tax / 100).toFixed(2);
  tax = parseFloat(tax);
  //grand total
  let grandTotal = parseFloat(totalPrice + shipping + tax);
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: {freeShipping ? "Free" : shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;
