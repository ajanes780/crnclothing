import React from "react";
import { connect } from "react-redux";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import { CartItemComponent } from "../cartItemComponent/CartItemComponent";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import "./CartDropDownComponentStyle.scss";

const CartDropDownComponent = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItemComponent key={cartItems.id} item={cartItem} />
      ))}
    </div>
    <CustomButtonComponent>GO TO CHECK OUT</CustomButtonComponent>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDownComponent);
