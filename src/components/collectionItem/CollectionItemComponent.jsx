import React from "react";
import "./CollectionItemComponentStyle.scss";

export const CollectionItemComponent = ({ id, name, price, imageUrl }) => (
  <>
    <div className="collection-item">
      <div
        className="image"
        style={{ "background-image": `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price"> {price}</span>
      </div>
    </div>
  </>
);
