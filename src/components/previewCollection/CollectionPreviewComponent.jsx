import React from "react";
import "./CollectionPreviewComponentStyle.scss";
import { CollectionItemComponent } from "../collectionItem/CollectionItemComponent";

export const CollectionPreviewComponent = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    {/* filter to only preview 4 items then map the items to divs  */}
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItemComponent
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
    </div>
  </div>
);
