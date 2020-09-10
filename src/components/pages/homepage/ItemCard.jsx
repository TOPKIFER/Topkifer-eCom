import React from "react";

import Adapt from "../../../assets/products/adapt.jpg";
import Adapt2 from "../../../assets/products/adapt2.jpg";
import shirt from "../../../assets/products/shirt.jpg";

import bag from "../../../assets/icons/bag.png";
import heart from "../../../assets/icons/heart.png";
import redheart from "../../../assets/icons/redheart.png";
import tick from "../../../assets/icons/tick.png";

export default function ItemCard() {
  return (
    <div className="item-card">
      <div className="card1">
        <div className="pic-holder">
          <img src={Adapt2} alt="product-img" className="product-img" />
          <div className="shop-action">
            <img className="icon not-fav" src={heart} alt="favorite" />
            <img className="icon fav" src={redheart} alt="redheart" />
            <img className="icon bag" src={bag} alt="shopping bag" />
          </div>
        </div>
        <div className="mini-info">
          <h3 className="product-title">
            {" "}
            this is the name hnfgn fgnfg fghnfgnx jnjxdty{" "}
          </h3>
          <h3 className="product-price">1,500,000 cfa</h3>
        </div>
      </div>
      <div className="card1">
        <div className="pic-holder">
          <img src={Adapt} alt="product-img" className="product-img" />
          <div className="shop-action">
            <img className="icon not-fav" src={heart} alt="favorite" />
            <img className="icon fav" src={redheart} alt="redheart" />
            <img className="icon bag" src={bag} alt="shopping bag" />
          </div>
        </div>
        <div className="mini-info">
          <h3 className="product-title">this is the</h3>
          <h3 className="product-price">$500</h3>
        </div>
      </div>
      <div className="card1">
        <div className="pic-holder">
          <img src={Adapt} alt="product-img" className="product-img" />
          <div className="shop-action">
            <img className="icon not-fav" src={heart} alt="favorite" />
            <img className="icon fav" src={redheart} alt="redheart" />
            <img className="icon bag" src={bag} alt="shopping bag" />
          </div>
        </div>
        <div className="mini-info">
          <h3 className="product-title">this is the</h3>
          <h3 className="product-price">$500</h3>
        </div>
      </div>
      {/* helloooooo */}
      <div className="card1">
        <div className="pic-holder">
          <img src={Adapt} alt="product-img" className="product-img" />
          <div className="shop-action">
            <img className="icon not-fav" src={heart} alt="favorite" />
            <img className="icon fav" src={redheart} alt="redheart" />
            <img className="icon bag bag1s" src={bag} alt="shopping bag" />
          </div>
        </div>
        <div className="mini-info">
          <h3 className="product-title">this is the</h3>
          <h3 className="product-price">$500</h3>
        </div>
      </div>
    </div>
  );
}
