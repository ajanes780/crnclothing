import React from "react";
import "./CustomButtonComponentStyle.scss";

export const CustomButtonComponent = ({ children, ...otherProps }) => (
  <button className="custom-button">{children} </button>
);
