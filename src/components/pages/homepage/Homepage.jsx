import React from "react";
import "./Homepage.scss";

import Categories from "./Categories";
import Carousel from "./Carousel";
import Carousel2 from "./CarouselManual";
import CarouselAuto from "./CarouselAuto";

export default function index() {
  return (
    <div className="Homepage">
      <Categories />
      <CarouselAuto />

      <h1>Level</h1>
    </div>
  );
}
