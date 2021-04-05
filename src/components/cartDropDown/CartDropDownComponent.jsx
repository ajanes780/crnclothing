import React from "react";
import { connect } from "react-redux";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import { CartItemComponent } from "../cartItemComponent/CartItemComponent";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import "./CartDropDownComponentStyle.scss";

const CartDropDownComponent = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItemComponent key={cartItems.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
    </div>
    <CustomButtonComponent
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECK OUT
    </CustomButtonComponent>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// all these HOC takes functions as args this statement evaluates
// from the inside out and will give us the history prop to use for out on click function to got o check out
// connect also passes dispatch into the props of the component so we can do one off dispatch like set cart to hidden
export default withRouter(connect(mapStateToProps)(CartDropDownComponent));
