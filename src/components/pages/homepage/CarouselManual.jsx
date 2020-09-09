import React, { useState } from "react";
import Content from "./Content.carousel";
import adapt from "../../../assets/products/adapt.jpg";
import adapt2 from "../../../assets/products/adapt2.jpg";
import shirt from "../../../assets/products/shirt.jpg";

export default function Carousel2() {
  let sliderArr = [
    <Content src={adapt} />,
    <Content src={adapt2} />,
    <Content src={shirt} />,
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="Carousel-manual">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goleft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goright" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
