import React from "react";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

import "./CollectionItemComponentStyle.scss";

const CollectionItemComponent = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-wrapper">
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{`$${price}.00`}</span>
        </div>
        <CustomButtonComponent inverted onClick={() => addItem(item)}>
          ADD TO CART
        </CustomButtonComponent>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemComponent);
