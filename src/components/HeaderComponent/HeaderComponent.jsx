import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utilis";
// this is a SVG image so this is special syntax to import it
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./HeaderComponentStyle.scss";

const HeaderComponent = ({ currentUser, setInProp }) => {
  return (
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
                  currentUser
                    ? `${currentUser.photoURL}`
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
};

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(HeaderComponent);
