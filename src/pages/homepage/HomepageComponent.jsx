import React from "react";
import "./homepageStyle.scss";
import { Directory } from "../../components/directory/directoryComponent";

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Crown Clothing </h1>
      <Directory />
    </div>
  );
};
