import React from "react";
import hero from "../../assets/Hero.jpg";
import "./heroComponentStyle.scss";

export const HeroComponent = () => (
  <div className="wrapper">
    <div className="image" style={{ "background-image": ` url(${hero})` }}>
      <h1 className="hero-title">Crown Clothing </h1>
    </div>
  </div>
);
