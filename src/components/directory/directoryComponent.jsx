import React, { useState } from "react";
import MenuItemComponent from "../menuItem/menuItem";
import "./directoryComponentStyle.scss";

export const Directory = () => {
  const [state] = useState({
    sections: [
      {
        title: "Hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "Jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "Sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "Womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "Mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  });

  return (
    <div className="directory-menu">
      {/* i will try to spread props here instead of breaking all these down =>title, imageUrl, size, linkUrl   */}
      {state.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItemComponent key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
