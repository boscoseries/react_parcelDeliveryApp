import React from "react";
import { NavLink } from 'react-router-dom'


export default function Login () {
  return (
    <div className="top-margin">
      <div className="form-wrapper" style={{ padding: '3rem' }}>
        <h4 style={{ textAlign: "center", color: "black" }}>User signup</h4>
        <form className="form">
          <div>
            <label for="email">Email Address:</label>
            <input type="email" id="email" placeholder="johndoe@example.com"  required/>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" />
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
