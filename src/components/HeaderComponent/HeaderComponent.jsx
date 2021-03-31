import React from "react";
import { Link } from "react-router-dom";
// this is a SVG image so this is special syntax to import it
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utilis";
import "./HeaderComponentStyle.scss";

export const HeaderComponent = ({ currentUser, userPhoto }) => (
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

      {currentUser ? (
        <>
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>

          <img
            src={userPhoto.photoURL}
            alt="user"
            style={{
              "border-radius": "50%",
              border: "2px solid  ",
              width: "50px",
            }}
          />
        </>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
