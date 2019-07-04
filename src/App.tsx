import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateOrder from "./pages/CreateOrder";


function App() {
  return (
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
  );
}

export default App;
