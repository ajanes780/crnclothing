import React from "react";
import "./CustomButtonComponentStyle.scss";

export const CustomButtonComponent = ({
  children,
  onClick,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      onClick={onClick}
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button `}
    >
      {children}{" "}
    </button>
  );
};
