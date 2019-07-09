import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  const isLoggedIn = { valid: false, invalid: true };

  return (
    <header className="header fixed-top">
      <div className="logo">
        <img src={logo} alt="jb" />
        <h2>DeliverIT</h2>
      </div>
      <nav className="header-content">
        <ul>
          {isLoggedIn.invalid && (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Get Started</NavLink>
              </li>
            </>
          )}
          {isLoggedIn.valid && (
            <>
              <li>
                <NavLink to="/login">Log Out</NavLink>
              </li>
              <li>
                <NavLink to="/create">Send a Parcel</NavLink>
              </li>
              <li>
                <NavLink to="">Track my Parcel</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
