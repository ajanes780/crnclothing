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
          <div style={{ marginLeft: "30px" }}>
            <img
              src={
                userPhoto.photoURL
                  ? userPhoto.photoURL
                  : `https://robohash.org/${currentUser.id}`
              }
              alt="user"
              style={{
                borderRadius: "50%",
                border: "2px solid  ",
                width: "40px",
                margin: "0px",
              }}
            />
            <p style={{ margin: "0px", padding: "0px" }}>
              {currentUser.displayName}
            </p>
          </div>
        </>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
