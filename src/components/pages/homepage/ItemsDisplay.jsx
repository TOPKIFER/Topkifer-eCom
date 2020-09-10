import React from "react";

import Adapt from "../../../assets/products/adapt.jpg";
import Adapt2 from "../../../assets/products/adapt2.jpg";
import shirt from "../../../assets/products/shirt.jpg";

import ItemCard from "./ItemCard";

const items = [
  {
    link: "https://github.com/RobertTk1",
    image: Adapt,
    name: "Nike adapt shoes for running",
    price: "45,000 cfa",
  },
  {
    link: "https://www.amazon.com/",
    image: Adapt2,
    name: "Nike Adapt 2 shoes for the run",
    price: "53,000 cfa",
  },
  {
    link: "https://github.com/RobertTk1",
    image: shirt,
    name: "t-shirt for the cool",
    price: "4,500 cfa",
  },
  {
    link: "https://www.amazon.com/",
    image: Adapt,
    name: "Nike adapt",
    price: "300,000 cfa",
  },
];

export default function ItemsDisplay() {
  return (
    <div className="items-display">
      <h4>Fashion</h4>

      <div className="item-list">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
