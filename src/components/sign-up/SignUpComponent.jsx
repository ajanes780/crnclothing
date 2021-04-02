import React, { useState } from "react";
import { FormInputComponent } from "../formInputComponent/FormInputComponent";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utilis";

import "./signUpComponentStyle.scss";
export const SignUpComponent = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords Do Not Match ");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setState((prev) => ({
        ...prev,
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }));
    } catch (error) {
      alert(error);
    }
  };
  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const { displayName, email, password, confirmPassword } = state;

  return (
    <div className="sign-up">
      <h2 className="title">I do not hand an account </h2>
      <span>Sign up with your email and password </span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInputComponent
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInputComponent
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInputComponent
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Passsword"
          required
        />
        <FormInputComponent
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButtonComponent type="submit">SIGN UP </CustomButtonComponent>
      </form>
    </div>
  );
};
