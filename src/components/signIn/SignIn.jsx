import React, { useState, useRef } from "react";

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
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={state.email}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input type="submit" value="submit form" />
      </form>
    </div>
  );
};
