import React, { useState, useRef } from "react";
import { FormInputComponent } from "../formInputComponent/FormInputComponent";
import { CustomButtonComponent } from "../CustomButton/CustomButtonComponent";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  auth,
} from "../../firebase/firebase.utilis";
import "./SignInStyle.scss";

export const SignIn = () => {
  const idRef = useRef();
  const [state, setState] = useState({ email: "", password: "" });
  // const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState((prev) => ({ ...prev, email: "", password: "" }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have and account </h2>
      <span>SIgn in with your email and password</span>

      <form ref={idRef} onSubmit={handleSubmit}>
        <FormInputComponent
          autoFocus
          name="email"
          type="email"
          label="email"
          onChange={handleChange}
          value={state.email}
          required
        />

        <FormInputComponent
          name="password"
          type="password"
          label="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButtonComponent onsubmit={handleSubmit} type="submit">
            Sign In
          </CustomButtonComponent>
          <CustomButtonComponent
            type="button"
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            {""}Sign In With Google{""}
          </CustomButtonComponent>
        </div>
      </form>
    </div>
  );
};
