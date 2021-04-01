import React from "react";
import "./homepageStyle.scss";
import { Directory } from "../../components/directory/directoryComponent";
import { HeroComponent } from "../../components/hero/HeroComponent";

export const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <HeroComponent>
          <h1>Crown Clothing </h1>
        </HeroComponent>
        <Directory />
      </div>
    </div>
  );
};
