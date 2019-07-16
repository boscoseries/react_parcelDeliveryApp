import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

import { logger } from "../context";


export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(logger);

  return (
    <header className="header fixed-top">
      <div className="logo">
        <img src={logo} alt="jb" />
        <h2>DeliverIT</h2>
      </div>
      <nav className="header-content">
        <ul>
          {!isLoggedIn.invalid &&
            ((
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Get Started</NavLink>
                </li>
              </>
            ))}
          {isLoggedIn.valid &&
            ( (
              <>
                <li>
                  <NavLink to="/create">Send a Parcel</NavLink>
                </li>
                <li>
                  <NavLink to="">Track my Parcel</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Log Out</NavLink>
                </li>
              </>
            ))}
        </ul>
      </nav>
    </header>
  );
}
