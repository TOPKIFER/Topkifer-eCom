import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Shirt from "../../../assets/products/shirt.jpg";
import Adapt from "../../../assets/products/adapt.jpg";
import Adapt2 from "../../../assets/products/adapt2.jpg";

export default function Carousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Adapt} alt="first slide" />

          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Adapt2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
