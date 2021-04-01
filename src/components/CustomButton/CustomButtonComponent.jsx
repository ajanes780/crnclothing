import React from "react";
import "./CustomButtonComponentStyle.scss";

export const CustomButtonComponent = ({
  children,
  onClick,
  isGoogleSignIn,
  ...otherProps
}) => {
  // console.log("THIS IS PROPS ", otherProps);
  return (
    <button
      onClick={onClick}
      // handleSubmit={handleSubmit}
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button `}
    >
      {children}{" "}
    </button>
  );
};
