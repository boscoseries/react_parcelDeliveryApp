import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { logger } from './context'

import "./styles/App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Stripe from "./Components/Stripe";
import CreateOrder from "./pages/CreateOrder";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({ valid: false, invalid: false })
  return (
    <logger.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/create" exact component={CreateOrder} />
          <Footer />
          </div>
        </Router>
    </logger.Provider>
  );
}

export default App;
