import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button"

import './styles.css'
import { logger } from "../../context";
import logo from "../../images/logo.svg";

export default function Header() {
  const { isLoggedIn } = useContext(logger);

  return (
    <nav className="navbar navbar-expand-lg bg-color">
      <NavLink className="navbar-brand" to="#">
        <img src={logo} width="70px" className="d-inline-block align-center" alt="" />
        <span className="logo-text">DeliverIT</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {!isLoggedIn.invalid && (
            <>
              <Button className="header-link nav-link" title={"Home"} to={"/"} />
              <Button className="header-link  nav-link" title={"Pricing"} to={"/pricing"} />
              <Button className="header-link  nav-link" title={"Get Started"} to={"/signup"} />
            </>
          )}
          {!isLoggedIn.valid && (
            <>
              <Button className="header-link nav-link" title={"Send a Parcel"} to={"/create"} />
              <Button className="header-link nav-link" title={"Track my Parcel"} to={""} />
              <Button className="header-link nav-link" title={" Sign Out"} to={"/login"} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

// <Button title="Home" className="header-link" />;
// <span className="sr-only">(current)</span>


// <header className="header fixed-top">
//   <div className="logo">
//     <img src={logo} alt="jb" />
//     <h2>DeliverIT</h2>
//   </div>
//   <nav className="header-content">
//     <ul>
//       {!isLoggedIn.invalid &&
//         ((
//           <>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/signup">Get Started</NavLink>
//             </li>
//           </>
//         ))}
//       {isLoggedIn.valid &&
//         ( (
//           <>
//             <li>
//               <NavLink to="/create">Send a Parcel</NavLink>
//             </li>
//             <li>
//               <NavLink to="">Track my Parcel</NavLink>
//             </li>
//             <li>
//               <NavLink to="/login">Log Out</NavLink>
//             </li>
//           </>
//         ))}
//     </ul>
//   </nav>
// </header>
