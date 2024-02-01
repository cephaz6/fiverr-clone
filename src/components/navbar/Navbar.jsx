import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        {/* <Link to="/"> */}
        <div className="logo">
          <span className="text">Cephaz</span>
          <span className="dot">.</span>
        </div>
        {/* </Link> */}
        <div className="links">
          <span>Cephaz Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test2</span>
        <span>Tet3</span>
      </div>
    </div>
  );
};

export default Navbar;
