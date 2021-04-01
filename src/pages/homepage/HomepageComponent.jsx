import React from "react";
import "./homepageStyle.scss";
import { Directory } from "../../components/directory/directoryComponent";
import { HeroComponent } from "../../components/hero/HeroComponent";

export const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <div className="homepage">
        <Directory />
      </div>
    </>
  );
};
