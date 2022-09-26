import React from "react";
import Logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="logo" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/manage">Manage</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
