import React from "react";
import { NavLink } from 'react-router-dom'


export default function Signup() {
  return (
    <React.Fragment>
      <div className="form-wrapper">
        <h4 style={{ textAlign: "center", color: "black", padding: 0, margin: 0 }}>User signup</h4>
        <form className="form">
          <div>
            <label for="firstname"> Fullname:</label>
            <input type="text" id="firstname" />
          </div>
          <div>
            <label for="email">Emiail Adress:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label for="phone2">Phone:</label>
            <input type="number" id="phone2" />
          </div>
          <div>
            <label for="address">Address:</label>
            <input type="text" id="address" />
          </div>
          <div>
            <label for="state">State:</label>
            <select id="state">
              <option value="">--Please choose an option--</option>
              <option value="lagos">Lagos</option>
            </select>
          </div>
          <div>
            <label for="country">Country:</label>
            <select id="country">
              <option value="">--Please choose an option--</option>
              <option value="country">Nigeria</option>
            </select>
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
    </React.Fragment>
  );
}
