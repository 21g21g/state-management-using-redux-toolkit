import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="links">
      <Link to="/" className="link">
        <a>shop</a>{" "}
      </Link>

      <Link to="/contact" className="link">
        <a> contact</a>
      </Link>

      <Link to="cart" className="link">
        <a>
          {" "}
          <FaIcons.FaLuggageCart />
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
