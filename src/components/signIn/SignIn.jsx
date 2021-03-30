import React, { useState, useRef } from "react";
import { FormInputComponent } from "../formInputComponent/FormInputComponent";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import "./SignInStyle.scss";

export const SignIn = () => {
  const idRef = useRef();
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    setState((prev) => ({ ...prev, email: "", password: "" }));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = idRef.current;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have and account </h2>
      <span>SIgn in with your email and password</span>

      <form ref={idRef} onSubmit={handleSubmit}>
        <FormInputComponent
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={state.email}
          required
        />

        <FormInputComponent
          name="password"
          type="password"
          label="Password"
          value={state.password}
          handleChange={handleChange}
          required
        />

        <CustomButtonComponent type="submit" value="submit form">
          Sign In{" "}
        </CustomButtonComponent>
      </form>
    </div>
  );
};
