import React from "react";
import "./menuItemStyle.scss";

export const MenuitemComponent = ({ title, imageUrl, size }) => (
  <div
    style={{ "background-image": `url(${imageUrl})` }}
    className={`${size} menu-item`}
  >
    <div style={{ "background-color": "#fff" }} className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
