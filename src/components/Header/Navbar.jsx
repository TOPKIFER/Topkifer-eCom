import React from "react";

import Logo from "../../assets/Logo/tklogoword1.png";

import search from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import bag from "../../assets/icons/bag.png";

import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-wrapper">
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="topkifer logo" />
          </Link>
        </div>
        <div className="search">
          <button>
            <img className="icon" src={search} alt="search" />
          </button>
        </div>
        <div className="info">
          <Link to="/favorite">
            <img className="icon" src={heart} alt="favorite" />
          </Link>
          <Link to="/cart">
            <img className="icon" src={bag} alt="shopping bag" />
            <span className="cart-number">9+</span>
          </Link>
        </div>
        <Menu />
      </div>
    </div>
  );
}
