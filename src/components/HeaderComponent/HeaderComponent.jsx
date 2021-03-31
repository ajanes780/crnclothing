import React from "react";
import { Link } from "react-router-dom";
// this is a SVG image so this is special syntax to import it
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./HeaderComponentStyle.scss";

export const HeaderComponent = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
      <img
        src={props.userPhoto}
        alt="user"
        style={{ "border-radius": "50%", border: "2px solid", width: "50px" }}
      />
    </div>
  </div>
);
