import React, { useState, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "../hooks/useForm";
import validate from "../hooks/validate";
import jwt from "jsonwebtoken";

import { logger } from '../context'
import axios from "axios";

export default function Login() {
  const { handleChange, handleSubmit, errors } = useForm(submit, validate);
  const { isLoggedIn, setIsLoggedIn } = useContext(logger)

  function submit(data: any) {
    console.log("login form submitted");
    axios
      .get(`http://localhost:3000/users/?email=${data.email}`)
      .then((response: any) => {
        if (response.data.length) {
          jwt.sign({ data: response.data }, "mysecret", { expiresIn: "1h" }, (error, token) => {
            if (token) {
              setIsLoggedIn({ valid: true, invalid: false })
              localStorage.setItem("token", token);
              localStorage.setItem("loggedIn", "true");
              console.log(token);
            }
            return;
          })
        } else {
          setIsLoggedIn({ valid: false, invalid: true })
          localStorage.setItem("notLoggedIn", "true");
          console.log('not found')
        }
      })
      .catch(err => {
        console.log("error message", err);
      });
    }

  return isLoggedIn.valid ? (
    <Redirect to="/create" />
  ) : (
    <div className="top-margin">
      <div className="form-wrapper" style={{ padding: "3rem" }}>
        <h4 style={{ textAlign: "center", color: "black" }}>User Login</h4>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              onChange={handleChange}
              className={`${errors.email || isLoggedIn.invalid ? "inputError" : "inputValid"}`}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className={`${errors.password || isLoggedIn.invalid ? "inputError" : "inputValid"}`}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <br />
          {errors.inputRequired && <p className="error">{errors.inputRequired}</p>}
          {isLoggedIn.invalid && <p className="error">Username or password is Invalid</p>}
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div className="login-link">
            Are you a new user? <NavLink to="/signup">Register</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
