import React, { useState } from "react";
import { CollectionPreviewComponent } from "../../components/previewCollection/CollectionPreviewComponent";

// mock data import now to set up things will  bring live data in later once completed
import SHOP_DATA from "./shopData";

export const ShopComponent = () => {
  const [data, setData] = useState({ collections: SHOP_DATA });

  const { collections } = data;
  console.log("this is data :>> ", collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreviewComponent key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
