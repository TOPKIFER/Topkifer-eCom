import React, { Component } from "react";

export default class ItemsDisplay extends Component {
  render() {
    const items = ["product 1", "product 2", "product 3", "product 4"];
    return (
      <div className="items-display">
        <h4>Fashion</h4>
        <div className="item-list">
          {items.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
