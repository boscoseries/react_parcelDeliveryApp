import React from "react";
import { NavLink } from 'react-router-dom';


export default function Signup() {
  return (
    <div className="top-margin">
      <div className="form-wrapper" style={{ width: "30%", padding: "50px" }}>
        <h4 style={{ textAlign: "center", color: "black", padding: 0, margin: 0 }}>User signup</h4>
        <form className="form">
          <div>
            <label htmlFor="firstname"> Fullname:</label>
            <input type="text" id="firstname" placeholder="Lastname Firstname Othernames" required />
          </div>
          <div>
            <label htmlFor="email">Emiail Adress:</label>
            <input type="email" id="email" placeholder="johndoe@example.com" required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" placeholder="11 digits number" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <div>
            <label htmlFor="password2">Confirm Password:</label>
            <input type="password" id="password2" required />
          </div>
          <br />
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div className="login-link">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
