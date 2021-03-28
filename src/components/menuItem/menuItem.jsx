import React from "react";
import "./menuItemStyle.scss";

export const MenuitemComponent = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
