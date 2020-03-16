import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const register = evt => {
    evt.preventDefault();

    const newUser = {
      // long-form
      username: username,
      // the rest are shorthand when key name matches variable name
      email,
      password,
      confirmPassword
    };

    axios
      .post("http://localhost:8000/api/register", newUser, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data.errors);

        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
      });
  };

  return (
    <fieldset>
      <legend>Sign Up</legend>

      <form onSubmit={register}>
        <div className="form-group">
          <label>Username:</label>
          <input
            onChange={event => setUsername(event.target.value)}
            type="text"
            value={username}
          />
          {errors.username ? (
            <span className="error-message">{errors.username.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input onChange={event => setEmail(event.target.value)} type="text" />
          {errors.email ? (
            <span className="error-message">{errors.email.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            onChange={event => setPassword(event.target.value)}
            type="password"
          />
          {errors.password ? (
            <span className="error-message">{errors.password.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            onChange={event => setConfirmPassword(event.target.value)}
            type="password"
          />
          {errors.confirmPassword ? (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <button className="btn">Sign Up</button>
      </form>
    </fieldset>
  );
};

export default SignUp;
