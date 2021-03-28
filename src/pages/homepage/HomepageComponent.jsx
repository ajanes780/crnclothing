import React from "react";
import "./homepageStyle.scss";
// import { MenuItem } from "../../components/menuItem/menuItem";
import Directory from "../../components/directory/directoryComponent";

export const HomePage = () => {
  return (
    <div lassName="homepage">
      <h1>Welcome To My Home Page</h1>
      <Directory />
    </div>
  );
};
