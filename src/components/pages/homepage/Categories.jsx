import React from "react";

import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <div className="Categories">
      <ul className="categories-list">
        <li>
          <Link to="/fashion">Fashion</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
          <ul className="options">
            <li>hello 2</li>
            <li>hello 2</li>
            <li>hello 2</li>
            <li>hello 2</li> 
          </ul>
        </li>
        <li>
          <Link to="/vehicles">Home</Link>
        </li>
        <li>
          <Link to="/home">Vehicles</Link>
        </li>
      </ul>
    </div>
  );
}
