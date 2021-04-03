import React from "react";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import "./CartDropDownComponentStyle.scss";

export const CartDropDownComponent = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButtonComponent>GO TO CHECK OUT</CustomButtonComponent>
  </div>
);
