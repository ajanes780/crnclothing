import React from "react";
import "./CartItemComponentStyle.scss";

export const CartItemComponent = ({
  item: { imageUrl, price, name, quantity },
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="store item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{`${quantity} x ${price}.00`}</span>
    </div>
  </div>
);
