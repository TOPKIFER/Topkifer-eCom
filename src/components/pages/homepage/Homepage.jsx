import React from "react";
import "./Homepage.scss";

import Categories from "./Categories";
//import CarouselManual from "./CarouselManual";
import CarouselAuto from "./CarouselAuto";
import ItemsDisplay from "./ItemsDisplay";
import ItemCard from "./ItemCard";

export default function index() {
  return (
    <div className="Homepage">
      <Categories />
      <CarouselAuto />
      <ItemsDisplay />
      <ItemCard />
    </div>
  );
}
