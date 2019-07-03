import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="jb" />
        <h2>DeliverIT</h2>
      </div>
      <nav className="navbar-content">
        <ul>
          <li>
            <NavLink>Send a Parcel</NavLink>
          </li>
          <li>
            <NavLink>Track my Parcel</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Get Started</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
