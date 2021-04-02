import React from "react";
import { withRouter } from "react-router";
import "./menuItemStyle.scss";

const MenuItemComponent = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  //  create an onclick event that pushes the name of the section to the url history
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div style={{ backgroundColor: "#fff" }} className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItemComponent);
