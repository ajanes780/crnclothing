import React from "react";
import "./signInPageStyle.scss";
import { SignIn } from "../../components/signIn/SignIn";
import { SignUpComponent } from "../../components/sign-up/SignUpComponent";

export const SignInPageAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUpComponent />
  </div>
);
