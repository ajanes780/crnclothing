import React from "react";
import hero from "../../assets/Hero.png";
import "./heroComponentStyle.scss";

export const HeroComponent = () => (
  <div className="wrapper">
    <div className="image" style={{ backgroundImage: ` url(${hero})` }}>
      <h1 className="hero-title">Crown Clothing </h1>
    </div>
  </div>
);
