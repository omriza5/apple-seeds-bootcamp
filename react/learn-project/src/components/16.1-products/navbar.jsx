import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="products-nav">
      <div className="nav-item">
        <NavLink to="/" exact className="inactive" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/products" className="inactive" activeClassName="active">
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
