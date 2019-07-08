import React from "react";
import { NavLink } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validate from '../hooks/validate';

import axios from "axios";



export default function Login() {

  const { handleChange, handleSubmit, errors } = useForm(submit, validate)

  function submit(data: object) {
    console.log("login form submitted");
    axios
      .post("http://localhost:3000/users", data)
      .then((res: any) => {
        console.log(res);
      })
      .catch(err => {
        console.log("error message", err);
      });
  }


  return (
    <div className="top-margin">
      <div className="form-wrapper" style={{ padding: '3rem' }}>
        <h4 style={{ textAlign: "center", color: "black" }}>User Login</h4>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" id="email" placeholder="johndoe@example.com" onChange={handleChange} className={`${errors.email ? "inputError" : "inputValid"}`}/>
            {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={handleChange} className={`${errors.password ? "inputError" : "inputValid"}`}/>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <br />
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
