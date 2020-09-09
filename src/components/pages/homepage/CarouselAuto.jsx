import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import adapt from "../../../assets/products/adapt.jpg";
import adapt2 from "../../../assets/products/adapt2.jpg";
import adapt3 from "../../../assets/products/shirt.jpg";
const data = [
  {
    name: "adapt",
    src: adapt,
  },
  {
    name: "adapt 2",
    src: adapt2,
  },
  {
    name: "adapt 3",
    src: adapt3,
  },
];
export default class CarouselAuto extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1500,

      className: "slides",
    };
    return (
      <div className="carousel-auto">
        <Slider {...settings}>
          {data.map((photo) => {
            return (
              <div key={photo.name}>
                <a href="https://google.com">
                  <img src={photo.src} alt="slider img" />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
