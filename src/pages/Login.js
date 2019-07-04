import React from "react";
import { NavLink } from 'react-router-dom'


export default function Login () {
  return (
    <React.Fragment>
      <div className="form-wrapper">
        <h4 style={{ textAlign: "center", color: "black", padding: 0, margin: 0 }}>User signup</h4>
        <form className="form">
          <div>
            <label for="email">Email Address:</label>
            <input type="email" id="email" />
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
    </React.Fragment>
  );
}
