import React, { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/validate";
import jwt from "jsonwebtoken";

import "./styles.css";
import { logger } from "../../context";
import axios from "axios";
import { Input, Label } from "../../Components/Input";
import Card from "../../Components/Card";

export default function Login() {
  const { handleChange, handleSubmit, errors } = useForm(submit, validate);
  const { isLoggedIn, setIsLoggedIn } = useContext(logger);

  function submit(data) {
    console.log("login form submitted");
    axios
      .get(`http://localhost:3000/users/?email=${data.email}`)
      .then((response) => {
        if (response.data.length) {
          jwt.sign({ data: response.data }, "mysecret", { expiresIn: "1h" }, (error, token) => {
            if (token) {
              setIsLoggedIn({ valid: true, invalid: false });
              localStorage.setItem("token", token);
              localStorage.setItem("loggedIn", "true");
              console.log(token);
            }
            return;
          });
        } else {
          setIsLoggedIn({ valid: false, invalid: true });
          localStorage.setItem("notLoggedIn", "true");
          console.log("not found");
        }
      })
      .catch(err => {
        console.log("error message", err);
      });
  }

  return isLoggedIn.valid ? (
    <Redirect to="/create" />
  ) : (
    <Card
      header={"User Login"}
      footer={
        <span>
          Are you a new user? <NavLink to="/signup">Register</NavLink>
        </span>
      }
      body={
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Label htmlFor="email" content="Email" />
          <div className="form-group">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              ariaLabel="Email"
              onChange={handleChange}
              className={`${errors.email || isLoggedIn.invalid ? "inputError" : null} form-control`}
            />
            {errors.email && <p className="error">Email field is required</p>}
          </div>
          <Label htmlFor="password" content="Password" />
          <div className="form-group">
            <Input
              htmlFor="password"
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={handleChange}
              className={`${errors.password || isLoggedIn.invalid ? "inputError" : null} form-control`}
            />
            {errors.password && <p className="error">Password field is required</p>}
            <br />
            {isLoggedIn.invalid && <p className="error">Username or password is Invalid</p>}
            <Input type="submit" value="Submit" id="submit" className="btn-primary" />
          </div>
        </form>
      }
    />
  );
}
