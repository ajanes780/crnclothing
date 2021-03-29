import React from "react";
import "./menuItemStyle.scss";

export const MenuitemComponent = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{ "background-image": `url(${imageUrl})` }}
      className="background-image"
    />
    <div style={{ "background-color": "#fff" }} className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
