import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utilis";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cartSelectors";

// this is a SVG image so this is special syntax to import it
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIconComponent from "../cartIcon/CartIconComponent";
import CartDropDownComponent from "../cartDropDown/CartDropDownComponent";

import "./HeaderComponentStyle.scss";

const HeaderComponent = ({ currentUser, hidden }) => {
  console.log("this us currentUser :>> ", currentUser);
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
            <div style={{ margin: "0px 30px" }}>
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
        <CartIconComponent />
      </div>
      {hidden ? null : <CartDropDownComponent />}
    </div>
  );
};

// how to destructor nested props  first we  select from state -> user  then the current user
// like so {user: currentUser} then you can put a comma and do it again for the next value
// we are then mapping all these values to props from redux to our component

// createStructuredSelector passes top level stat into our selectors here <- refactor improvement
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderComponent);
