import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CheckoutItemComponent } from "../../components/checkoutItemComponet/checkoutItemComponent";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import "./checkoutPageComponentStyle.scss";

const checkoutPageComponent = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}.00</span>
    </div>
  </div>
);

const mapStateTopProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateTopProps)(checkoutPageComponent);
