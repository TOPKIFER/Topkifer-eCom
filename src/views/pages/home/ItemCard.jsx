import React from "react";

import bag from "../../../assets/icons/bag.png";
import heart from "../../../assets/icons/heart.png";
import redheart from "../../../assets/icons/redheart.png";
//import tick from "../../../assets/icons/tick.png";

export default function ItemCard({ item }) {
  return (
    <a href={item.link} className="item-card">
      <div className="pic-holder">
        <img src={item.image} alt="product-img" className="product-img" />
        <div className="shop-action">
          <img className="icon not-fav" src={heart} alt="favorite" />
          <img className="icon fav" src={redheart} alt="redheart" />
          <img className="icon bag" src={bag} alt="shopping bag" />
        </div>
      </div>
      <div className="mini-info">
        <h3 className="product-title">{item.name}</h3>
        <h3 className="product-price">{item.price}</h3>
      </div>
    </a>
  );
}
