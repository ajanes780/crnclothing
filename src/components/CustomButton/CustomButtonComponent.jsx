import React from "react";
import "./CustomButtonComponentStyle.scss";

export const CustomButtonComponent = ({ children, onClick, ...otherProps }) => {
  // console.log("THIS IS PROPS ", otherProps);
  return (
    <button
      onClick={onClick}
      // handleSubmit={handleSubmit}
      className="custom-button"
    >
      {children}{" "}
    </button>
  );
};
