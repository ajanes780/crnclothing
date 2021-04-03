import React from "react";
import "./cartIconComponentStyle.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconComponent = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
